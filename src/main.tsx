import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from '@/auth/components/SessionProvider';
import { router } from '@/router';
import '@/index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <SessionProvider>
                <RouterProvider router={router} />
            </SessionProvider>
        </QueryClientProvider>
    </StrictMode>
);
