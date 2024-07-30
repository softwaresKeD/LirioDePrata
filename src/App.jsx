import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header'
import Carrocel from './components/Carrocel/Carrocel';

import Home from './Home';
import Sobre from './Sobre';
import imagensData from './data/imagens.json';


function App() {
  const imagensHome = imagensData.home_superior;

  return (
    <>
      <Header />

      <main className='Conteudo'>
        <Carrocel images={imagensHome} />
        <Sobre />
        <Home />
      </main>
      


      {/* <Home /> */}
      {/* <Sobre /> */}
    </>
  )
}

export default App
