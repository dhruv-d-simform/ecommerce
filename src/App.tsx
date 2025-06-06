import { Outlet } from 'react-router';
import { Header } from '@/components/Header';

function App() {
    return (
        <div>
            <Header />
            <div className="max-w-[100rem] mx-auto pt-16">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
