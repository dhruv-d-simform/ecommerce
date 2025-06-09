import { useDeferredValue, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SearchContext } from '@/contexts/SearchContext';

function App() {
    const [searchInput, setSearchInput] = useState('');
    const filter = useDeferredValue(searchInput);

    const location = useLocation();

    useEffect(() => {
        setSearchInput('');
    }, [location.pathname]);

    return (
        <div>
            <Header searchInput={searchInput} setSearchInput={setSearchInput} />
            <div className="max-w-[100rem] mx-auto pt-16">
                <SearchContext.Provider value={filter}>
                    <Outlet />
                </SearchContext.Provider>
            </div>
            <Footer />
        </div>
    );
}

export default App;
