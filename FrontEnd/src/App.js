import React from 'react';
import './App.css';

import Home from "./components/Home"
import Info from './components/Info';
import Contactus from './components/Contactus';
import Centers from './components/Centers';
import Details from './components/Details';
import Login from './components/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './components/Register';
import Profile from "./components/Profile";
import RegCenter from './components/RegCenter';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <div className='flex'>

      {/* <Login/> */}
      {/* <Navbar/>
      <Home/> */}
      {/* <Info/> */}
      {/* <Contactus/> */}
      {/* <Centers/> */}
      {/* <Details/> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/contact' element={<Contactus/>}/>
        <Route path='/centers' element={<Centers/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/regcenter' element={<RegCenter/>}/>
      </Routes>
    
      
    </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
