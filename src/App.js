import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import { Footer } from './components/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';
import { GiftRegistry } from './pages/GiftRegistry';
import { Itinerary } from './pages/Itinerary';
import { Contact } from './pages/Contact';



function App() {
  return (
    <BrowserRouter>
    <div className="linear-gradient(rgb(243, 244, 246), rgb(209, 213, 219))">
     <Navbar/> 
 
  
    
    <Routes>
      <Route path='/inicio' element={<Home />}/>
      <Route path='*' element={<PageNotFound />}/>
      <Route path='/registro' element={<GiftRegistry/>}/>
      <Route path='/itinerario' element={<Itinerary/>}/>
      <Route path='/contacto' element={<Contact/>}/>
    </Routes>
    <footer>
      <Footer/>
     </footer>
     </div>
</BrowserRouter>
  );
}

export default App;
