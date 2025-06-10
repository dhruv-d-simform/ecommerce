import React, { useEffect, useState } from 'react';
import { SessionContext } from '../contexts/SessionContext';
import { SupabaseSession } from '@/types/supabase.types';
import { supabase } from '@/supabase-client';

let initialSession: SupabaseSession = null;

try {
    const { data } = await supabase.auth.getSession();
    initialSession = data.session;
} catch (err) {
    console.error(err);
}

export function SessionProvider({ children }: React.PropsWithChildren) {
    const [session, setSession] = useState<SupabaseSession>(initialSession);

    useEffect(() => {
        const fetchSession = async () => {
            const { data } = await supabase.auth.getSession();
            setSession(data.session);
        };

        fetchSession();

        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
            }
        );

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    );
}
