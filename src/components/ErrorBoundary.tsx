import React from 'react';

export interface Prop {
    children: React.ReactNode;
}
export interface State {
    hasError: boolean;
    errorMsg: string;
}

export class ErrorBoundary extends React.Component<Prop, State> {
    constructor(props: Prop) {
        super(props);
        this.state = { hasError: false, errorMsg: '' };
    }
    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, errorMsg: error.message };
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    handleReset() {
        this.setState({ hasError: false, errorMsg: '' });
    }
    render() {
        if (this.state.hasError) {
            const error = this.state.errorMsg || 'Something went wrong.';

            return (
                <div className="flex items-center justify-center h-screen bg-white">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold text-red-600">
                            Oops!
                        </h1>
                        <p className="mt-4 text-lg text-gray-800">{error}</p>
                        <p className="mt-2 text-sm text-gray-600">
                            We're sorry for the inconvenience. Please try again
                            later.
                        </p>
                        <div className="mt-6">
                            <a
                                href="/"
                                className="px-4 py-2 text-white bg-main rounded hover:opacity-90"
                            >
                                Go to Home
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}
