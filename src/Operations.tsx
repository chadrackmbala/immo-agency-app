import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useOperationContextProvider from './OperationsContextProvider';
import useMenuStore from "./Provider";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Location from './Location';
import Achat from './Achat';
import Vente from './Vente';
import type { SubMenu } from './MenuType';

function Operations({ closeOperations }: {
  closeOperations: () => void;
}) {
  const { setOverLay } = useMenuStore();

  // const [setIsToggleLocation] = useState(false);
  // const [setIsToggleAchat] = useState(false);
  // const [setIsToggleVente] = useState(false);
  // const { isOpenLocation } = useMenuStore();
  const { setIsCliked } = useOperationContextProvider();
  const location = useLocation();
  const { setOpen } = useMenuStore();
  const [openSubMenu, setOpenSubMenu] = useState<SubMenu | null>(null);
  // valeurs possibles : 'location' | 'achat' | 'vente' | null

  function closeAll() {
    setOpen(false);        // menu mobile
    setOpenSubMenu(null);  // sous-menu
    closeOperations();     // dropdown opérations
    setOverLay(false);
  }

  function toggleSubMenu(name: SubMenu) {
    setOpenSubMenu(prev => (prev === name ? null : name));
  }

  // function onToggleLocation() {
  //   setIsToggleLocation(preview => !preview);
  // }

  // function onToggleAchat() {
  //   setIsToggleAchat(preview => !preview);
  // }
  // function onToggleVente() {
  //   setIsToggleVente(preview => !preview);
  // }

  // useEffect(() => {
  //   document.body.style.overflow = isOpenLocation ? "hidden" : "auto";

  //   if (!isOpenLocation) {
  //     setIsToggleLocation(false);
  //   }
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isOpenLocation]);

  useEffect(() => {
    const operationsRoutes = ['/achat', '/vente', '/location'];
    setIsCliked(operationsRoutes.includes(location.pathname));
  }, [location.pathname, setIsCliked]);

  return (

    <div>
      <div className="flex flex-col text-white pl-2 gap-2">
        <div
          onClick={() => toggleSubMenu('location')}
          className="flex items-center gap-1 cursor-pointer"
        >
          <h2 className={openSubMenu === 'location' ? 'text-[#BFA75C]' : 'text-white'}>
            Location
          </h2>
          {openSubMenu === 'location'
            ? <ChevronRightIcon />
            : <ExpandMoreIcon />}
        </div>

        {openSubMenu === 'location' && (
          <div className=" w-40">
            <Location closeLocation={closeAll} />
          </div>
        )}

        <div
          onClick={() => toggleSubMenu('vente')}
          className="flex items-center gap-1 cursor-pointer"
        >
          <h2 className={openSubMenu === 'achat' ? 'text-[#BFA75C]' : 'text-white'}>
            Vente
          </h2>
          {openSubMenu === 'vente'
            ? <ChevronRightIcon />
            : <ExpandMoreIcon />}
        </div>

        {openSubMenu === 'vente' && (
          <div className=" w-40">
            <Vente closeVente={closeAll} />
          </div>
        )}

        <div
          onClick={() => toggleSubMenu('achat')}
          className="flex items-center gap-1 cursor-pointer"
        >
          <h2 className={openSubMenu === 'achat' ? 'text-[#BFA75C]' : 'text-white'}>
            Achat
          </h2>
          {openSubMenu === 'achat'
            ? <ChevronRightIcon />
            : <ExpandMoreIcon />}
        </div>

        {openSubMenu === 'achat' && (
          <div className=" w-40">
            <Achat closeAchat={closeAll} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Operations;
