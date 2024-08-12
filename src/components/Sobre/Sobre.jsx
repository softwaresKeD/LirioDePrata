import './Sobre.css'

function Sobre({ conteudo }){
    return(
        <>
            <div className="sobre">
                <div className="fundo-cor">
                    <div className="conteiner-sobre-title">
                        <h1 className="sobre-title">{conteudo.titulo}</h1>
                    </div>
                </div>
                <div className="fundo-foto">
                    <div className='conteiner-sobre-info'>
                        <h5 className="sobre-subtitle">{conteudo.subtitulo}</h5>
                        <p className="p-sobre">{conteudo.texto}</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Sobre ;