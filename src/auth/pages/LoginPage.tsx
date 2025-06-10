import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function LoginPage() {
    return (
        <form>
            <div className="flex items-center justify-center min-h-[80dvh] pt-8 pb-16">
                <div className="flex flex-col w-100 gap-6">
                    <p className="text-4xl font-medium my-8" role="heading">
                        Login to your account
                    </p>

                    <div className="text-red-600 text-sm p-2 bg-red-50 rounded-md">
                        Auth Error
                    </div>

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
                            />
                            <p className="text-red-600 text-sm">Email Error</p>
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
                            />
                            <p className="text-red-600 text-sm">
                                Password Error
                            </p>
                        </div>
                    </div>
                    <div>
                        <Button
                            type="submit"
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
