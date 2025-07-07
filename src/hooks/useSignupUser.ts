import { useMutation } from '@tanstack/react-query';
import { signUpUser } from '@/utils/auth';
import type {
    SignupOrSigninResponse,
    SignupOrSigninResponseError,
} from '@/types/auth.types';
import { useNavigate } from 'react-router';

export const useSignupUser = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: signUpUser,
        onSuccess: (data: SignupOrSigninResponse) => {
            if (data.status === 'success') {
                alert('Account created successfully');
                navigate('/login');
            } else {
                alert(
                    data.message ||
                        'An error occurred during signup. Please try again'
                );
            }
        },
        onError: (error: SignupOrSigninResponseError) => {
            console.error(error.message);
        },
    });
};
