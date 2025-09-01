import React from 'react';
import Loader from './Loader/Loader';
import { useEffect, useState } from 'react';
import './App.css';
import LoaderPage from './Loader/LoaderPage';
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';
import {

  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";
import Shop from './Shop';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Individual from './Individual';

function App() {


return (
 <Router>
       
<nav>

<Link to="/" className="link">Home</Link>
<Link to="/shop" className="link">Shop</Link>
<Link to="/contact" className="link">Contact  Us</Link>
<Link to="/individual" className="link">Individual order</Link>
<Link to="/about" className="link">About Us</Link>
</nav>

<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/shop" element={<Shop/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/individual" element={<Individual/>} />
  <Route path="/about" element={<About/>} />
</Routes>
</Router>
  );
}

export default App;
