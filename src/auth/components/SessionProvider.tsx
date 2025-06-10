import React, { useEffect, useState } from 'react';
import { SessionContext } from '@/auth/contexts/SessionContext';
import { SupabaseSession } from '@/types/supabase.types';
import { supabase } from '@/supabase-client';

export function SessionProvider({ children }: React.PropsWithChildren) {
    const [session, setSession] = useState<SupabaseSession>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSession = async () => {
            const { data } = await supabase.auth.getSession();
            setSession(data.session);
            setLoading(false);
        };

        fetchSession();

        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
                setLoading(false);
            }
        );

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    return (
        <SessionContext.Provider value={{ session, loading }}>
            {children}
        </SessionContext.Provider>
    );
}
