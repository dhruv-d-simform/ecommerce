import { useDeferredValue, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SearchContext } from '@/contexts/SearchContext';

function App() {
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const [searchInput, setSearchInput] = useState('');
    const filter = useDeferredValue(searchInput);

    const location = useLocation();

    useEffect(() => {
        setSearchInput('');
    }, [location.pathname]);

    const focusOnSearch = () => {
        searchInputRef.current?.focus();
    };

    return (
        <div>
            <Header
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                ref={searchInputRef}
            />
            <div className="max-w-[100rem] mx-auto pt-16">
                <SearchContext.Provider value={filter}>
                    <Outlet />
                </SearchContext.Provider>
            </div>
            <Footer focusOnSearch={focusOnSearch} />
        </div>
    );
}

export default App;
