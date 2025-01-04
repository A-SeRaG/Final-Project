import './App.css';
import HomePage from './pages/homepage.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Erorpage from './pages/Erorpage.js';
import Useracount from './pages/useraccountpage.js';
import Fullporductspage from './pages/fullprductpage.js';
import Aboutpage from './pages/aboutpage.js';
import Contactpage from './pages/contactpage.js';
import Womenpage from './pages/womenpage.js';
import Menpage from './pages/menpage.js';
import Childrenpage from './pages/childernpage.js';
import Shoesbagspage from './pages/bagsclothes.js';
import Userprofile from './components/user.js';
const App = () => {
  return (
    <BrowserRouter>  
      <Routes>
        {/* Define routes for each page/component */}
        <Route path="/about" element={<Aboutpage />} />
        
        {/* Home route with all components combined */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Default Route (home or main page) */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path= "/*" element= {<Erorpage  />} />
        <Route path='/Fullproducts' element={<Fullporductspage/>}/>
        <Route path='/womenpage' element={<Womenpage/>}/>
        <Route path='/menpage' element={<Menpage/>}/>
        <Route path='/childernpage' element={< Childrenpage/>}/>
        <Route path='/shoesbags' element={<Shoesbagspage/>}/>
        <Route path='/profile' element={<Userprofile/>}/>

        <Route path="/useraccount" element={<Useracount />} exact />
      </Routes>
    

      {/* Footer stays at the bottom */}

    </BrowserRouter>
  );
};

export default App;
