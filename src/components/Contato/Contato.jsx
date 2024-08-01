function Contato() {
    return (
        <>
            <div className="ctt">
                <div className = "contato">
                    <div id="localizer1">
                        <h1 className="titulo_contato">Faça uma encomenda conosco.</h1>
                        <p className="p_form">Pães, bolos e sobremesas deliciosas disponíveis para você a todo momento do dia. Solicite um orçamento:</p>
                        <div className="form-container">
                            <form>
                                <fieldset>
                                    <div className="form-group">
                                        <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />
                                        <label htmlFor="nome" className="p_form"></label>
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone" required />
                                        <label htmlFor="telefone" className="p_form"></label>
                                    </div>
                                    <div className="form-checkbox-group">
                                        <label className="p_form">O que deseja?</label>
                                        <br />
                                        <label className="p_form"><input type="checkbox" name="desejo" value="sobremesa" />Sobremesa</label>
                                        <br />
                                        <label className="p_form"><input type="checkbox" name="desejo" value="bolo" />Bolo</label>
                                        <br />
                                        <label className="p_form"><input type="checkbox" name="desejo" value="pao" />Pão</label>
                                    </div>
                                    <div className="form-group">
                                        <textarea id="pedido" name="pedido" rows="4" placeholder="Nos diga com detalhes oque deseja pedir" required></textarea>
                                        <label htmlFor="pedido" className="p_form">Descreva seu pedido</label>
                                    </div>
                                    <button type="submit">Enviar</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="localizer2">
                    <div className="dados_ctt">
                        <h2 className="titulo_contato">Contato</h2>
                        <h4 className="titulo_contato">Telefone : 1234567789</h4>
                        <h4 className="titulo_contato">e-mail : loja123@gmail.com</h4>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Contato;
