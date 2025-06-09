import { Link } from 'react-router';
import { Input } from './ui/input';
import { Button } from './ui/button';

import searchIcon from '/icons/search.svg';

interface HeaderProps {
    searchInput: string;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
    ref: React.Ref<HTMLInputElement | null>;
}

export function Header({ searchInput, setSearchInput, ref }: HeaderProps) {
    return (
        <header className="fixed z-10 bg-background w-full max-w-[100rem] mx-auto left-0 right-0 h-16 border-b flex justify-between items-center gap-6 px-6">
            <Link to="/" className="text-2xl font-bold text-nowrap">
                <span className="text-main">E</span>Commerce
            </Link>

            <div className="w-full max-w-[30rem] relative ml-auto">
                <Input
                    type="text"
                    placeholder="What are you looking for ?"
                    className="w-full h-10 pr-12 bg-searchbar border-none"
                    aria-label="Search products"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.currentTarget.value)}
                    ref={ref}
                />

                <Button
                    className="absolute top-0 right-0 aspect-square h-full p-2 cursor-pointer"
                    variant="ghost"
                >
                    <img
                        src={searchIcon}
                        className="w-full h-full"
                        alt="Search Icon"
                    />
                </Button>
            </div>

            <Button
                variant="ghost"
                className="bg-main text-white hover:bg-main hover:text-white hover:opacity-90 cursor-pointer"
            >
                Login
            </Button>
        </header>
    );
}
