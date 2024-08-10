import React from 'react';
import { Route, Routes, Navigate  } from 'react-router-dom';

import './index.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';
import Cardapio from './pages/Cardapio/Cardapio';
import Contato from './components/Contato/Contato';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='main-content'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
