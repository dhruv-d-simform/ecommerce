import { createContext, useContext } from 'react';
import { SupabaseSession } from '@/types/supabase.types';

export const SessionContext = createContext<SupabaseSession>(null);

export function useSession() {
    return useContext(SessionContext);
}
