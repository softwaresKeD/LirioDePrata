import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header'
import Carrocel from './components/Carrocel/Carrocel';

import Home from './Home';
import Sobre from './Sobre';

import hm1 from './assets/imagens/home1.jpg';
import hm2 from './assets/imagens/home2.jpg';
import hm3 from './assets/imagens/home3.jpg';



function App() {
  const imagensHome = [
    {
      src: hm1,
      alt: 'First slide',
      label: 'First slide label',
      text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      src: hm2,
      alt: 'First slide',
      label: 'First slide label',
      text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      src: hm3,
      alt: 'First slide',
      label: 'First slide label',
      text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    }
  ];

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
