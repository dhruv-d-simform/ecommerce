import { Navigate } from 'react-router';
import { useSession } from '@/auth/contexts/SessionContext';

export function PublicRoute({ children }: React.PropsWithChildren) {
    const session = useSession();
    if (session) {
        return <Navigate to="/" replace />;
    }
    return children;
}
