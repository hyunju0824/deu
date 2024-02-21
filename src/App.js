import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import './App.css';
import './assets/css/font.css'


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>} />
        </Routes>
    </div>
  );
}

export default App;
