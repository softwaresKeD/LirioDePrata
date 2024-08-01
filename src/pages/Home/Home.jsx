import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Carrocel from '../../components/Carrocel/Carrocel';
import Sobre from '../../components/Sobre/Sobre';

import imagensData from '../../data/imagens.json';
import Contato from '../../components/Contato/Contato';

function Home() {
  const imagensHome = imagensData.home_superior;

  return (
    <>

      <main className='Conteudo'>
        <Carrocel images={imagensHome} />

        {/* Sobre Nós */}
        <Sobre />

        {/* Colocar mais um carrocel aqui com outras imagens */}
        <Carrocel images={imagensHome} />

        {/* Contato */}
        <Sobre />
        <Contato />

      </main>

    </>
  )
}

export default Home
