
import React, { useState } from 'react'; 
import Header from './components/header/header'; 
import Sidebar from './components/sidebar/sidebar'; 
import MainPage from './components/main-page/main-page'; 
import Footer from './components/footer/footer';
/* import wordsData from './data/words'; */

import './index.css';
import "./App.css"

function App() {

  return (
    <div className="app">
      <Sidebar  />
      <div className="main-content">
        <Header />
        <MainPage  />
        <Footer />
      </div>
    </div>
  );
}

export default App;
