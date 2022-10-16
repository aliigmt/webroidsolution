import './App.css';
import React, { Component } from 'react'
import Home from './components/Home';
import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';
export class App extends Component {
  render() {
    return (
   <div>
     <div class="page-wrapper">
      <div id="ht-preloader">
        <div class="loader clear-loader">
          <div class="loader-text">Loading</div>
          <div class="loader-dots">

          </div>
        </div>
      </div>
          <Header />
          <Home />
         </div>
         <Footer />
      </div>
      
    )
  }
}

export default App
