import React, { useEffect, useState } from 'react';
import { SessionContext } from '@/auth/contexts/SessionContext';
import { checkAuth } from '@/utils/authValidation';

export function SessionProvider({ children }: React.PropsWithChildren) {
    const [session, setSession] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function validate() {
            const token = await checkAuth();
            setSession(token);
            setLoading(false);
        }
        validate();
    }, []);

    return (
        <SessionContext.Provider value={{ session, loading, setSession }}>
            {children}
        </SessionContext.Provider>
    );
}
