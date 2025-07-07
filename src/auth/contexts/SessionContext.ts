import { createContext, useContext } from 'react';

export const SessionContext = createContext<{
    session: string | null;
    loading: boolean;
    setSession: (session: string | null) => void;
}>({
    session: null,
    loading: true,
    setSession: () => {},
});

export function useSession() {
    return useContext(SessionContext);
}
