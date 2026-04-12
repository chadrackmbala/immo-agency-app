import './App.css'
import './index.css';
import Logo from './Logo'
import NavLinks from './NavLinks';
import HamburgerComponent from './HamburgerComponent';
import { useState, useEffect } from 'react';

function Header() {

    // 🔹 State pour suivre la largeur de l’écran
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // 🔸 Nettoyage pour éviter les fuites mémoire
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
        <div className='bg-[#1E3866] flex items-center justify-start gap-30 pl-10 fixed top-0 left-0 z-50 w-full'>
            <Logo />
            {width >= 768 ? (
                <NavLinks />
            ) : (
                <HamburgerComponent />
            )}
        </div>
    )
}

export default Header;