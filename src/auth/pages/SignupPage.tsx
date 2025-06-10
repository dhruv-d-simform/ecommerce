import { Link } from 'react-router';
import { CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

export function SignupPage() {
    return (
        <form>
            <div className="flex h-full items-center justify-center pb-16">
                <div className="flex flex-col w-180 gap-6">
                    <p
                        className="text-4xl font-medium my-8 text-center"
                        role="heading"
                    >
                        Create an account in{' '}
                        <span className="text-main">E</span>Commerce
                    </p>

                    {/* First-name & Last-name */}
                    <div className="flex gap-3">
                        <div className="space-y-3 w-full">
                            <Label
                                htmlFor="firstName"
                                className="text-gray-700"
                            >
                                First Name{' '}
                                <span className="text-red-700">*</span>
                            </Label>
                            <Input
                                name="firstName"
                                placeholder="Enter your First Name"
                                id="firstName"
                                className="h-10"
                            />
                            <p className="text-red-600 text-sm">
                                First Name Error
                            </p>
                        </div>
                        <div className="space-y-3 w-full">
                            <Label htmlFor="lastName" className="text-gray-700">
                                Last Name{' '}
                                <span className="text-red-700">*</span>
                            </Label>
                            <Input
                                name="lastName"
                                placeholder="Enter your Last Name"
                                id="lastName"
                                className="h-10"
                            />
                            <p className="text-red-600 text-sm">
                                Last Name Error
                            </p>
                        </div>
                    </div>

                    {/* Email & City */}
                    <div className="flex gap-3">
                        <div className="space-y-3 w-full">
                            <Label htmlFor="email" className="text-gray-700">
                                Email <span className="text-red-700">*</span>
                            </Label>
                            <Input
                                name="email"
                                placeholder="Enter your Email"
                                id="email"
                                className="h-10"
                            />
                            <p className="text-red-600 text-sm">Email Error</p>
                        </div>
                        <div className="space-y-3 w-full">
                            <Label htmlFor="city" className="text-gray-700">
                                City
                            </Label>
                            <Input
                                placeholder="Enter your City"
                                id="city"
                                className="h-10"
                            />
                        </div>
                    </div>

                    {/* State & Address */}
                    <div className="flex gap-3">
                        <div className="space-y-3 w-full">
                            <Label htmlFor="state" className="text-gray-700">
                                State
                            </Label>
                            <Input
                                placeholder="Enter your State"
                                id="state"
                                className="h-10"
                            />
                        </div>
                        <div className="space-y-3 w-full">
                            <Label htmlFor="address" className="text-gray-700">
                                Address
                            </Label>
                            <Input
                                placeholder="Enter your Address"
                                id="address"
                                className="h-10"
                            />
                        </div>
                    </div>

                    {/* Age & Gender */}
                    <div className="flex gap-3">
                        <div className="space-y-3 w-full">
                            <Label htmlFor="age" className="text-gray-700">
                                Age <span className="text-red-700">*</span>
                            </Label>
                            <Input
                                name="age"
                                placeholder="Enter your Age"
                                id="age"
                                className="h-10"
                                type="number"
                            />
                            <p className="text-red-600 text-sm">Age Error</p>
                        </div>
                        <div className="space-y-3 w-full">
                            <Label htmlFor="gender" className="text-gray-700">
                                Gender <span className="text-red-700">*</span>
                            </Label>
                            <Select name="gender">
                                <SelectTrigger
                                    id="gender"
                                    className="w-full py-[18.5px]"
                                >
                                    <SelectValue placeholder="Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">
                                        Female
                                    </SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            <p className="text-red-600 text-sm">Gender Error</p>
                        </div>
                    </div>

                    {/* Contact Number & Profile Image */}
                    <div className="flex gap-3">
                        <div className="space-y-3 w-full">
                            <Label
                                htmlFor="contactNumber"
                                className="text-gray-700"
                            >
                                Contact Number{' '}
                                <span className="text-red-700">*</span>
                            </Label>
                            <Input
                                name="contactNumber"
                                placeholder="Enter your Contact Number"
                                id="contactNumber"
                                className="h-10"
                                type="number"
                            />
                            <p className="text-red-600 text-sm">
                                Contact Number Error
                            </p>
                        </div>
                        <div className="space-y-3 w-full">
                            <Label htmlFor="picture" className="text-gray-700">
                                Profile Picture
                            </Label>
                            <Input
                                id="picture"
                                type="file"
                                className="h-10 text-gray-700 cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* BirthDate & Password */}
                    <div className="flex gap-3">
                        <div className="space-y-3 w-full">
                            <Label
                                htmlFor="birth-date"
                                className="text-gray-700"
                            >
                                Birth Date
                            </Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        type="button"
                                        id="birth-date"
                                        variant="outline"
                                        className="w-full justify-start font-normal cursor-pointer h-10"
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        Select Your Birth Date
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="w-auto p-0"
                                    align="start"
                                >
                                    <Calendar mode="single" initialFocus />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="space-y-3 w-full">
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label
                                    htmlFor="password"
                                    className="text-gray-700"
                                >
                                    Password{' '}
                                    <span className="text-red-700">*</span>
                                </Label>
                                <Input
                                    name="password"
                                    placeholder="Enter Password"
                                    id="password"
                                    type="password"
                                    className="h-10 text-gray-700"
                                />
                                <p className="text-red-600 text-sm">
                                    Password Error
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="w-1/2 pr-2 space-y-3">
                        <Label
                            htmlFor="confirmPassword"
                            className="text-gray-700"
                        >
                            Confirm Password{' '}
                            <span className="text-red-700">*</span>
                        </Label>
                        <Input
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            id="confirm-password"
                            type="password"
                            className="h-10 text-gray-700"
                        />
                        <p className="text-red-600 text-sm">
                            Confirm Password Error
                        </p>
                    </div>

                    <div>
                        <Button
                            className="bg-main text-[16px] w-full py-5 cursor-pointer hover:bg-main/80"
                            type="submit"
                        >
                            Create Account
                        </Button>
                    </div>
                    <div>
                        <p>
                            Already Have An Account?{' '}
                            <Link to="/login">
                                <span className="text-blue-600 ml-1.5">
                                    Login
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}
