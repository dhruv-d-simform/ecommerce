interface SignupData {
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    password: string;
}

interface UserData {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    contactNumber: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    profileCompleted: boolean;
    teacher?: null | unknown;
    student?: null | unknown;
}
interface SignupOrSigninResponseSuccess {
    status: 'success';
    message: string;
    data: {
        user: UserData;
        accessToken: string;
        refreshToken: string;
    };
}

interface SignupOrSigninResponseError {
    status: 'error';
    message: string;
}

interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}

type SignupOrSigninResponse =
    | SignupOrSigninResponseSuccess
    | SignupOrSigninResponseError;

export type {
    SignupData,
    UserData,
    SignupOrSigninResponseSuccess,
    SignupOrSigninResponseError,
    SignupOrSigninResponse,
    AuthTokens,
};
