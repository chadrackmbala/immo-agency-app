import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavLinks from "./NavLinks";
import useMenuStore from "./Provider";
import { ScrollFadeIn } from './ScrollFadeIn';

function HamburgerComponent() {


    const [opened, setOpened] = useState(false);
    const { overLay, setOverLay } = useMenuStore();

    function onToggle() {
        setToggledMenu(preview => !preview);
    }

    useEffect(() => {
        document.body.style.overflow = overLay ? "hidden" : "auto";

        // if (!opened) {
        //     setIsToggleOperations(false);
        // }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [overLay]);

    return (
        <>
            <Hamburger toggled={overLay} toggle={setOverLay} color="#ffffff" />
            {overLay && (
                <div className="fixed inset-0 bg-slate-900 dark:bg-slate-900 text-black dark:text-white z-[9999]">
                    <ScrollFadeIn>
                    <div className="flex justify-end p-4">
                        <Hamburger toggled={overLay} toggle={setOverLay} color="#ffffff" />
                    </div>
                    </ScrollFadeIn>
                    <ScrollFadeIn>
                        <main className="flex flex-col gap-3 items-start text-2xl text-left px-6 flex flex-col items-start text-2xl text-left px-6 pt-0">
                            <NavLinks />
                        </main>
                    </ScrollFadeIn>
                </div>
            )}
        </>
    );
}

export default HamburgerComponent;
