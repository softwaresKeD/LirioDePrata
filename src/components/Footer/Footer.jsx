import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
    const UrlLogo = "./assets/imagens/logo.png"; // Atualize com o caminho correto da imagem do logo

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <img src={UrlLogo} alt="Logo" className="footer-logo" />
                </div>
                <div className="footer-center">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="footer-icon" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="footer-icon" />
                    </a>
                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="footer-icon" />
                    </a>
                </div>
                <div className="footer-right">
                    <span>managed by <span className='kd-name'>K&D</span></span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
