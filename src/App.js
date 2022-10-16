import './App.css';
import React, { Component } from 'react'
import Home from './components/Home';
import Footer from './components/Layouts/Footer';
export class App extends Component {
  render() {
    return (
      <div>
         <Home />
         <Footer />
      </div>
    )
  }
}

export default App
