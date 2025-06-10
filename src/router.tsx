import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router';
import App from '@/App';
import { HomePage } from '@/pages/HomePage';
import { ProductDetailsPage } from '@/pages/ProductDetailsPage';
import { LoginPage } from './auth/pages/LoginPage';
import { SignupPage } from '@/auth/pages/SignupPage';
import { NotFound } from '@/pages/NotFound';
import { PrivateRoute } from '@/auth/components/PrivateRoute';
import { PublicRoute } from '@/auth/components/PublicRoute';
import { ErrorBoundary } from './components/ErrorBoundary';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <ErrorBoundary>
                            <App />
                        </ErrorBoundary>
                    </PrivateRoute>
                }
            >
                <Route index element={<HomePage />} />
                <Route
                    path="/product/:productId"
                    element={<ProductDetailsPage />}
                />
            </Route>

            <Route
                path="/login"
                element={
                    <PublicRoute>
                        <ErrorBoundary>
                            <LoginPage />
                        </ErrorBoundary>
                    </PublicRoute>
                }
            />
            <Route
                path="/signup"
                element={
                    <PublicRoute>
                        <ErrorBoundary>
                            <SignupPage />
                        </ErrorBoundary>
                    </PublicRoute>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);
