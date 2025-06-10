import { createContext, useContext } from 'react';
import { SupabaseSession } from '@/types/supabase.types';

export const SessionContext = createContext<{
    session: SupabaseSession;
    loading: boolean;
}>({
    session: null,
    loading: true,
});

export function useSession() {
    return useContext(SessionContext);
}
