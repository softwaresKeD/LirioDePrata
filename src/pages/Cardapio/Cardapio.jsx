import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cardapio.css'

import Carrocel from '../../components/Carrocel/Carrocel';
import CategoriaProduto from '../../components/CategoriaProduto/CategoriaProduto'
import Produto from '../../components/Produto/Produto'

import imagensData from '../../data/imagens.json';
import produtosPorCategoria from '../../data/produtos.json';

const categorias = [{ 'titulo': 'Assados', 'imagem': './assets/imagens/Cardapio1.jpg' }, { 'titulo': 'Doces', 'imagem': './assets/imagens/Cardapio2.jpg' }, { 'titulo': 'Salgados', 'imagem': './assets/imagens/Cardapio3.jpg' }, { 'titulo': 'Bolos', 'imagem': './assets/imagens/Cardapio4.jpg' }]

function Cardapio() {
  const imagensCarrocel_superior = imagensData.cardapio_superior;

  const [categoriaSelecionada, setCategoriaSelecionada] = useState(categorias[0].titulo);
  const produtos = produtosPorCategoria[categoriaSelecionada];

  return (
    <>
      <main className='Conteudo'>
        <Carrocel images={imagensCarrocel_superior} />

        <div className='categorias'>
          <div className='categorias-listagem'>
            {categorias.map((categoria, index) => (
              <div key={index} onClick={() => setCategoriaSelecionada(categoria.titulo)}>
                <CategoriaProduto categoria_produto={categoria} />
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="row">
            {produtos.map((produto, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                <Produto info_produto={produto} />
              </div>
            ))}
          </div>
        </div>


      </main>
    </>
  )
}

export default Cardapio
