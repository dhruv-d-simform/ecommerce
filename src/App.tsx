import { Outlet } from 'react-router';

function App() {
    return (
        <div>
            <div className="max-w-[100rem] mx-auto pt-16">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
