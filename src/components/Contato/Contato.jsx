import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contato.css'

function Contato() {
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        desejo: [],
        pedido: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prevState => {
                const desejo = checked
                    ? [...prevState.desejo, value]
                    : prevState.desejo.filter(d => d !== value);
                return { ...prevState, desejo };
            });
        } else {
            setFormData(prevState => ({ ...prevState, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'default_service', // Substitua pelo seu Service ID do EmailJS
            'template_eyp8zsd', // Substitua pelo seu Template ID do EmailJS
            formData,
            'IBFfu3kEWl5hrs4SC' // Substitua pelo seu Public Key do EmailJS
        )
        .then((response) => {
            console.log('Email enviado com sucesso!', response.status, response.text);
            alert('Email enviado com sucesso!');
        }, (err) => {
            console.error('Erro ao enviar email:', err);
            alert('Erro ao enviar email.');
        });
    };

    return (
        <>
            <div className="ctt">
                <div className="contato">
                    <div id="localizer1">
                        <h1 className="titulo_contato">Faça uma encomenda conosco.</h1>
                        <p className="p_form">Pães, bolos e sobremesas deliciosas disponíveis para você a todo momento do dia. Solicite um orçamento:</p>
                        <div className="form-container">
                            <form onSubmit={handleSubmit}>
                                <fieldset>
                                    <div className="form-group">
                                        <input type="text" id="nome" name="nome" placeholder="Digite seu nome" value={formData.nome} onChange={handleChange} required />
                                        <label htmlFor="nome" className="p_form"></label>
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone" value={formData.telefone} onChange={handleChange} required />
                                        <label htmlFor="telefone" className="p_form"></label>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" value={formData.email} onChange={handleChange} required />
                                        <label htmlFor="email" className="p_form"></label>
                                    </div>
                                    <div className="form-checkbox-group">
                                        <label className="p_form"><br /><br />O que deseja?</label>
                                        <br />
                                        <label className="p_form"><input type="checkbox" name="desejo" value="sobremesa" onChange={handleChange} />Sobremesa</label>
                                        <br />
                                        <label className="p_form"><input type="checkbox" name="desejo" value="bolo" onChange={handleChange} />Bolo</label>
                                        <br />
                                        <label className="p_form"><input type="checkbox" name="desejo" value="pao" onChange={handleChange} />Pão</label>
                                    </div>
                                    <div className="form-group">
                                        <br />
                                        <textarea id="pedido" name="pedido" rows="4" placeholder="Nos diga com detalhes o que deseja pedir" value={formData.pedido} onChange={handleChange} required></textarea>
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

// Baixar dependências do email js

export default Contato;


