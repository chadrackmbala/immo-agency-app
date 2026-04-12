import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Operations from './Operations';
import useMenuStore from './Provider';
import useOperationContextProvider from './OperationsContextProvider.js';

function NavLinkComponent() {
    const [isToggleOperations, setIsToggleOperations] = useState(false);
    const operationsRef = useRef<HTMLDivElement | null>(null);

    const { isCliked, setIsCliked } = useOperationContextProvider();
    const { setOpen } = useMenuStore();
    const location = useLocation();

    // 🔒 mettre à jour la couleur du texte selon la route
    useEffect(() => {
        const routesOperations = ['/achat', '/vente', '/location'];
        setIsCliked(routesOperations.includes(location.pathname));
    }, [location.pathname, setIsCliked]);

    // 🔒 fermer le dropdown si clic en dehors
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (operationsRef.current && !operationsRef.current.contains(event.target as Node)) {
                setIsToggleOperations(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className='flex items-center gap-10 relative'>
            <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) => isActive ? '!text-[#BFA75C]' : '!text-white hover:!text-sky-400'}
            >
                Accueil
            </NavLink>
            <NavLink
                to="/about-us"
                onClick={() => setOpen(false)}
                className={({ isActive }) => isActive ? '!text-[#BFA75C]' : '!text-white hover:!text-sky-400'}
            >
                A propos de nous
            </NavLink>
            {/* Opérations */}
            <div ref={operationsRef} className="relative">
                <div
                    onClick={() => setIsToggleOperations(prev => !prev)}
                    className="flex items-center gap-1 cursor-pointer"
                >
                    <h2 className={isCliked ? 'text-[#BFA75C]' : 'text-white'}>
                        Opérations
                    </h2>
                    {isToggleOperations ? <ChevronRightIcon className="text-white" /> : <ExpandMoreIcon className="text-white" /> }
                </div>

                {/* Menu conditionnel */}
                {isToggleOperations && (
                    <div className="absolute left-0 top-full mt-2 w-40 bg-[#1E3866] shadow-lg rounded-md z-50">
                        <Operations closeOperations={() => setIsToggleOperations(false)} />
                    </div>
                )}
            </div>

            <NavLink
                to="/gestion-locative"
                onClick={() => setOpen(false)}
                className={({ isActive }) => isActive ? '!text-[#BFA75C]' : '!text-white hover:!text-sky-400'}
            >
                Gestion locative
            </NavLink>

            <NavLink
                to="/documentation"
                onClick={() => setOpen(false)}
                className={({ isActive }) => isActive ? '!text-[#BFA75C]' : '!text-white hover:!text-sky-400'}
            >
                Documentation
            </NavLink>
        </div>
    );
}

export default NavLinkComponent;
