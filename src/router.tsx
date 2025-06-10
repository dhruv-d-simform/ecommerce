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

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route
                    path="/product/:productId"
                    element={<ProductDetailsPage />}
                />
            </Route>

            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);
