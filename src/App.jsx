import './App.css'
import { HashRouter, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Documentation from './Documentation';
import OffreImmobiliere from './OffreImmobiliere';
import Location from './Location';
import Vente from './Vente';
import Achat from './Achat';
import LocationMaison from './LocationMaison';
import LocationAppartement from './LocationAppartement';
import LocationBureau from './LocationBureau';
import AchatMaison from './AchatMaison';
import AchatAppartement from './AchatAppartement';
import AchatBureau from './AchatBureau';
import VenteBureau from './VenteBureau';
import VenteMaison from './VenteMaison';
import VenteAppartement from './VenteAppartement';
import Ajout from './Ajout';
import ContactForm from './ContactForm';

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/ajout" element={<Ajout />} />
            <Route path="/offre-immobiliere" element={<OffreImmobiliere />} />
            <Route path="/contact-form" element={<ContactForm />} />
            <Route path="/location" element={<Location />} />
            <Route path="/Vente" element={<Vente />} />
            <Route path="/Achat" element={<Achat />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="location-maison" element={<LocationMaison />} />
            <Route path="location-appartement" element={<LocationAppartement />} />
            <Route path="location-bureau" element={<LocationBureau />} />
            <Route path="achat-maison" element={<AchatMaison />} />
            <Route path="achat-appartement" element={<AchatAppartement />} />
            <Route path="achat-bureau" element={<AchatBureau />} />
            <Route path="vente-bureau" element={<VenteBureau />} />
            <Route path="vente-maison" element={<VenteMaison />} />
            <Route path="vente-appartement" element={<VenteAppartement />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
