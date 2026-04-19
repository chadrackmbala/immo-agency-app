import './App.css';
import './index.css';
import Logo from './Logo';
import NavLinks from './NavLinks';
import HamburgerComponent from './HamburgerComponent';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { ScrollFadeIn } from './ScrollFadeIn';

function Header() {

    const [hideTopNav, setHideTopNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Si l'utilisateur a scrollé plus de 50px vers le bas
            if (window.scrollY > 10) {
                setHideTopNav(true);
            } else {
                setHideTopNav(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 🔹 State pour suivre la largeur de l’écran

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // 🔹 Vérifie la largeur au montage
        const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
        checkScreen();

        // 🔹 Met à jour à chaque resize
        const handleResize = () => checkScreen();
        window.addEventListener('resize', handleResize);

        // 🔹 Nettoyage
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='pb-[120px]'>
            <header className="fixed top-0 left-0 w-full z-50 bg-[#1E3866]">

                {/* <div className="w-full flex justify-center pt-2">
                    <SearchBar />
                </div>
                <div className="h-[2px] w-screen bg-[#BFA75C] mt-2 mb-2" /> */}
                <div
                    className={`transition-all duration-500 ease-in-out transform 
                    ${hideTopNav ? 'opacity-0 -translate-y-10 h-0 overflow-hidden' : 'opacity-100 translate-y-0 h-auto'}`}
                >
                    
                    <ScrollFadeIn>
                        <div className="w-full flex justify-center pt-2">
                            <SearchBar />
                        </div>
                    </ScrollFadeIn>
                    <div className="h-[2px] w-screen bg-[#BFA75C] mt-2" />
                </div>
                <div className="flex items-center justify-between px-4 py-2 lg:px-8 lg:flex lg:justify-start lg:gap-45">
                    <Logo />
                    {isDesktop ? <NavLinks /> : <HamburgerComponent />}
                </div>
            </header>
        </div>
    );
}

export default Header;
