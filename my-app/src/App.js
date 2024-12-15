import './App.css';
import NavbarScroll from "./components/navbar.js";
import Swiperparent from './components/swiper.js';
import Timer from './components/timer.js';
import Basicard from './components/cards.js';
import CategoryBasic from './components/category.js';
import ArrivalBasic from './components/arrival.js';
import Release from './components/release.js';
import Footer from './components/footer.js';
import About from './components/about.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Swiperparent />
      <Timer />
      <Basicard />
      <CategoryBasic />
      <ArrivalBasic />
      <Release />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar stays on top for all routes */}
      <NavbarScroll />

      <Routes>
        {/* Define routes for each page/component */}
        <Route path="/about" element={<About />} />
        
        {/* Home route with all components combined */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Default Route (home or main page) */}
        <Route path="/" element={<HomePage />} />
      </Routes>

      {/* Footer stays at the bottom */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;