import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import { signInUser } from '@/utils/auth';
import { checkAuth } from '@/utils/authValidation';
import { useSession } from '@/auth/contexts/SessionContext';

import type {
    // SignupOrSigninResponse,
    // SignupOrSignupResponseError,
    SignupOrSigninResponse,
    SignupOrSigninResponseError,
} from '@/types/auth.types';

export const useLoginUser = () => {
    const navigate = useNavigate();
    const { setSession } = useSession();

    return useMutation({
        mutationFn: signInUser,
        onSuccess: async (data: SignupOrSigninResponse) => {
            if (data.status === 'success') {
                const session = await checkAuth();
                setSession(session);
                navigate('/');
            } else {
                throw new Error(data.message);
            }
        },
        onError: (error: SignupOrSigninResponseError) => {
            console.error(error);
        },
    });
};
