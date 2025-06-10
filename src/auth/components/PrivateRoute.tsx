import { Navigate } from 'react-router';
import { useSession } from '@/auth/contexts/SessionContext';

export function PrivateRoute({ children }: React.PropsWithChildren) {
    const session = useSession();
    if (!session) {
        return <Navigate to="/login" replace />;
    }
    return children;
}
