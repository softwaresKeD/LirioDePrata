import './CategoriaProduto.css'


function CategoriaProduto({ categoria_produto }) {

    const boxStyle = {
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)), url(${categoria_produto.imagem})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    };

    return (
        <div className="box-categoria" style={boxStyle}>
            <span className="titulo-categoria">{categoria_produto.titulo}</span>
        </div>
    )
}

export default CategoriaProduto