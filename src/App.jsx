import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header'
import Carrocel from './components/Carrocel/Carrocel';
import TituloSecao from './components/TituloSecao/TituloSecao'
import Home from './components/Home/Home'
import Sobre from './components/Sobre/Sobre';
import Footer from './components/Footer/Footer'

import imagensData from './data/imagens.json';
import Contato from './components/Contato/Contato';


function App() {
  const imagensHome = imagensData.home_superior;

  return (
    <>
        <Header />
      

      <main className='Conteudo'>
        <Carrocel images={imagensHome} />
        
        {/* Sobre Nós */}
        <Sobre />

        {/* Colocar mais um carrocel aqui com outras imagens */}
        <Carrocel images={imagensHome} />
        
        {/* Contato */}
        <Sobre />
        <Contato />

        {/* Footer */}
        <Footer/>
      </main>
      


    </>
  )
}

export default App
