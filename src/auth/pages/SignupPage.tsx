import { useState } from 'react';
import { Link } from 'react-router';
import { CalendarIcon } from 'lucide-react';
import { useFormik } from 'formik';
import { format } from 'date-fns';

import type { User } from '@/types/user.types';
import { AddUserSchema } from '@/auth/utils/validations';
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
import { useSignupUser } from '@/hooks/useSignupUser';
import { Spinner } from '@/components/ui/spinner';

export function SignupPage() {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const { mutate: signUpUser, isPending } = useSignupUser();

    const formik = useFormik<Omit<User, 'age' | 'gender'>>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            contactNumber: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: AddUserSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            const newUser = {
                firstName: values.firstName.trim(),
                lastName: values.lastName.trim(),
                email: values.email.trim(),
                contactNumber: String(values.contactNumber),
                password: values.password,
            };
            signUpUser(newUser);
        },
    });

    if (isPending) {
        return (
            <div className="flex flex-col items-center min-h-[80vh] justify-center">
                <Spinner />
                <p className="text-xl text-gray-600 mt-4 font-medium">
                    Creating account for you...
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    Please wait while we are creating account for you...
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="flex h-full min-h-dvh items-center justify-center pt-8 pb-16">
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
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.firstName &&
                                formik.errors.firstName && (
                                    <p className="text-red-600 text-sm">
                                        {formik.errors.firstName}
                                    </p>
                                )}
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
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.lastName &&
                                formik.errors.lastName && (
                                    <p className="text-red-600 text-sm">
                                        {formik.errors.lastName}
                                    </p>
                                )}
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
                                Age
                            </Label>
                            <Input
                                name="age"
                                placeholder="Enter your Age"
                                id="age"
                                className="h-10"
                                type="number"
                            />
                        </div>
                        <div className="space-y-3 w-full">
                            <Label htmlFor="gender" className="text-gray-700">
                                Gender
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
                                value={formik.values.contactNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.contactNumber &&
                                formik.errors.contactNumber && (
                                    <p className="text-red-600 text-sm">
                                        {formik.errors.contactNumber}
                                    </p>
                                )}
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
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        type="button"
                                        id="birth-date"
                                        variant="outline"
                                        className="w-full justify-start font-normal cursor-pointer h-10"
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date
                                            ? format(date, 'PPP')
                                            : 'Select Your Birth Date'}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="w-auto p-0"
                                    align="start"
                                >
                                    <Calendar
                                        mode="single"
                                        initialFocus
                                        selected={date}
                                        onSelect={(date) => {
                                            setDate(date);
                                            setOpen(false);
                                        }}
                                    />
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
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.confirmPassword &&
                            formik.errors.confirmPassword && (
                                <p className="text-red-600 text-sm">
                                    {formik.errors.confirmPassword}
                                </p>
                            )}
                    </div>

                    <div>
                        <Button
                            className="bg-main text-[16px] w-full py-5 cursor-pointer hover:bg-main/80"
                            type="submit"
                            disabled={!(formik.isValid && formik.dirty)}
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
