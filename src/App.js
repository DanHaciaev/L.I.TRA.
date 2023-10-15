import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Home from './components/HomePage/Home';
import TelescopicCovers from './components/PagesOfProducts/TelescopicCovers';
import RetractablePergolas from './components/PagesOfProducts/RetractablePergolas'
import BioclimaticPergolas from './components/PagesOfProducts/BioclimaticPergolas'
import PoolCovers from './components/PagesOfProducts/PoolCovers'
import GardenCoverings from './components/PagesOfProducts/GardenCoverings'
import AwningTerrace from './components/PagesOfProducts/AwningTerrace'
import SlidingVerandas from './components/PagesOfProducts/SlidingVerandas'
import SideClousers from './components/PagesOfProducts/SideClousers'
import TransparentCovers from './components/PagesOfProducts/TransparentCovers'
import SportFacilities from './components/PagesOfProducts/SportFacilities'
import MobileShade from './components/PagesOfProducts/MobileShade'
import TensileStructures from './components/PagesOfProducts/TensileStuctures'


function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contacts' element={<Contacts />}></Route>
          <Route path='telescopic_covers' element={<TelescopicCovers />}></Route>
          <Route path='retractable_pergolas' element={<RetractablePergolas />}></Route>
          <Route path='bioclimatic_pergolas' element={<BioclimaticPergolas />}></Route>
          <Route path='pool_covers' element={<PoolCovers />}></Route>
          <Route path='garden_coverings' element={<GardenCoverings />}></Route>
          <Route path='awning_for_terrace' element={<AwningTerrace />}></Route>
          <Route path='sliding_verandas' element={<SlidingVerandas />}></Route>
          <Route path='side_closures' element={<SideClousers />}></Route>
          <Route path='transparent_covers' element={<TransparentCovers />}></Route>
          <Route path='sports_facilities' element={<SportFacilities />}></Route>
          <Route path='mobile_shade' element={<MobileShade />}></Route>
          <Route path='tensile_structures' element={<TensileStructures />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
