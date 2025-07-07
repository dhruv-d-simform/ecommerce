import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { User } from '@/types/user.types';
import { useLoginUser } from '@/hooks/useLoginUser';
import { Spinner } from '@/components/ui/spinner';

export function LoginPage() {
    const [authError, setAuthError] = useState<string | null>(null);
    const { mutate: logInUser, error, isError, isPending } = useLoginUser();

    const loginUser = Yup.object({
        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const formik = useFormik<Pick<User, 'email' | 'password'>>({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginUser,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            setAuthError(null);
            logInUser(values);
        },
    });

    useEffect(() => {
        if (isError && error) {
            setAuthError(error.message);
        }
    }, [isError, error]);

    if (isPending) {
        return (
            <div className="flex flex-col items-center min-h-[80vh] justify-center">
                <Spinner />
                <p className="text-xl text-gray-600 mt-4 font-medium">
                    Signin...
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center justify-center min-h-[80dvh] pt-8 pb-16">
                <div className="flex flex-col w-100 gap-6">
                    <p className="text-4xl font-medium my-8" role="heading">
                        Login to your account
                    </p>

                    {authError && (
                        <div className="text-red-600 text-sm p-2 bg-red-50 rounded-md">
                            {authError}
                        </div>
                    )}

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <Label htmlFor="email" className="text-gray-700">
                                Email
                            </Label>
                            <Input
                                name="email"
                                placeholder="Enter your email"
                                id="email"
                                className="h-10"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-600 text-sm">
                                    {formik.errors.email}
                                </p>
                            )}
                        </div>
                        <div className="space-y-3">
                            <Label htmlFor="password" className="text-gray-700">
                                Password
                            </Label>
                            <Input
                                name="password"
                                placeholder="Enter your Password"
                                type="password"
                                id="password"
                                className="h-10"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.password &&
                                formik.errors.password && (
                                    <p className="text-red-600 text-sm">
                                        {formik.errors.password}
                                    </p>
                                )}
                        </div>
                    </div>
                    <div>
                        <Button
                            type="submit"
                            disabled={!(formik.isValid && formik.dirty)}
                            className="bg-main text-white text-[16px] w-full py-5 cursor-pointer hover:bg-main/80"
                        >
                            Login Now
                        </Button>
                    </div>
                    <div>
                        <p>
                            Don't Have An Account?{' '}
                            <Link to="/signup">
                                <span className="text-blue-600 ml-1.5">
                                    Sign Up
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}
