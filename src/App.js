import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Main from './pages/Main/Main';
import './pages/Main/Main.css'
import Header from './components/Header/Header';
import './App.css';
import './assets/css/font.css'
import '../src/components/Header/Header.css'
import Footer from './components/Footer/Footer';
import './components/Footer/Footer.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
