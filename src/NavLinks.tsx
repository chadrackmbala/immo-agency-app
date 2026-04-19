import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Operations from './Operations';
import useMenuStore from './Provider';
import useOperationContextProvider from './OperationsContextProvider';

function NavLinkComponent() {
    const [isToggleOperations, setIsToggleOperations] = useState(false);
    const operationsRef = useRef<HTMLDivElement | null>(null);

    const { isCliked, setIsCliked } = useOperationContextProvider();
    const { setOpen, closeAllMenus } = useMenuStore();
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
        <div className='flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-10 lg:relative'>
            <NavLink
                to="/"
                onClick={() => closeAllMenus()}
                className={({ isActive }) => isActive ? '!text-[#BFA75C]' : '!text-white hover:!text-sky-400'}
            >
                Accueil
            </NavLink>
            <NavLink
                to="/about-us"
                onClick={() => closeAllMenus()}
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
                    {isToggleOperations ? <ChevronRightIcon className="text-white" /> : <ExpandMoreIcon className="text-white" />}
                </div>

                {/* Menu conditionnel */}
                {isToggleOperations && (
                    <div className="mt-2 w-full lg:w-40 lg:mt-2 lg:bg-[#1E3866] lg:shadow-lg lg:rounded-b-md lg:absolute lg:left-0 lg:top-full lg:mt-[29.3px] z-50">

                        {/* Cette barre est visible seulement en desktop */}
                        <div className="hidden lg:block bg-[#BFA75C] h-1"></div>

                        <Operations
                            closeOperations={() => {
                                setIsToggleOperations(false);
                                setOpen(false);
                            }}
                        />
                    </div>
                )}

            </div>
            <NavLink
                to="/offre-immobiliere"
                onClick={() => closeAllMenus()}
                className={({ isActive }) => isActive ? '!text-[#BFA75C]' : '!text-white hover:!text-sky-400'}
            >
                Offre Immobilière
            </NavLink>

            <NavLink
                to="/documentation"
                onClick={() => closeAllMenus()}
                className={({ isActive }) => isActive ? '!text-[#BFA75C]' : '!text-white hover:!text-sky-400'}
            >
                Documentation
            </NavLink>
            <NavLink
                to="/ajout"
                onClick={() => closeAllMenus()}
                className={({ isActive }) => isActive ? '!text-[#BFA75C]' : '!text-white hover:!text-sky-400'}
            >
                Ajout d'informations
            </NavLink>
        </div>
    );
}

export default NavLinkComponent;
