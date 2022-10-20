import './App.css';
import React, { Component } from 'react'
import Home from './components/Home';
import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Career from './components/Career';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export class App extends Component {
  render() {
    return (
   <div>
     <div className="page-wrapper">
      <div id="ht-preloader">
        <div className="loader clear-loader">
          <div className="loader-text">Loading</div>
          <div className="loader-dots">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
        </div>
      </div>
        <BrowserRouter>
         <Header />
          <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/career" element={<Career/>}></Route>
          <Route path="/contactus" element={<ContactUs/>}></Route>
        </Routes>
          <Footer/>
        </BrowserRouter>
        </div>
      </div>
      
    )
  }
}

export default App
