import { Navigate } from 'react-router';
import { useSession } from '@/auth/contexts/SessionContext';
import { Spinner } from '@/components/ui/spinner';

export function PublicRoute({ children }: React.PropsWithChildren) {
    const { session, loading } = useSession();

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[40vh] py-16">
                <div className="mb-8 relative">
                    <Spinner />
                </div>
            </div>
        );
    }

    if (session) {
        return <Navigate to="/" replace />;
    }
    return children;
}
