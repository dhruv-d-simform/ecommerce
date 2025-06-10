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

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <App />
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
                        <LoginPage />
                    </PublicRoute>
                }
            />
            <Route
                path="/signup"
                element={
                    <PublicRoute>
                        <SignupPage />
                    </PublicRoute>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);
