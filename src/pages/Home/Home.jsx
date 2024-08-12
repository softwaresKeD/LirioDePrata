import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Carrocel from '../../components/Carrocel/Carrocel';
import Sobre from '../../components/Sobre/Sobre';

import imagensData from '../../data/imagens.json';
import textosData from '../../data/textos.json';

function Home() {
  const imagensHome1 = imagensData.home_superior;
  const textoSobre0 = textosData.sobre_nos[0];
  const textoSobre1 = textosData.sobre_nos[1];

  return (
    <>

      <main className='Conteudo'>
        <Carrocel images={imagensHome1} />

        {/* Sobre Nós pt 0 */}
        <Sobre conteudo={textoSobre0} />

        {/* Colocar mais um carrocel aqui com outras imagens */}
        <Carrocel images={imagensHome1} />

        {/* Sobre Nós pt 1 */}
        <Sobre conteudo={textoSobre1} />

      </main>

    </>
  )
}

export default Home
