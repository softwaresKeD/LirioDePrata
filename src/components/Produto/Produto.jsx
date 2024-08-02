import './Produto.css'


function Produto({ info_produto }) {

    return (
        <div className="box-produto">
            <div className='produto-infos'>
                <h5 className="titulo-produto">{info_produto.titulo}</h5>

                <span className='descricao-produto'>{info_produto.descricao}</span>

                <span>R$ {info_produto.preco},00</span>
            </div>
            <div className='produto-imagem'>
                <img src={info_produto.imagem} alt="" />
            </div>
        </div>
    )
}

export default Produto