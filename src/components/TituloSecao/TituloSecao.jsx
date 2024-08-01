import React from 'react';
import './TituloSecao.css';
import {  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TituloSecao({ titulo }) {
    return (
        <div className='conteudo-titulo'>
            <p>{titulo}</p>
        </div>
    );
}

export default TituloSecao;
