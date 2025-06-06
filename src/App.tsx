import { Outlet } from 'react-router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

function App() {
    return (
        <div>
            <Header />
            <div className="max-w-[100rem] mx-auto pt-16">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
