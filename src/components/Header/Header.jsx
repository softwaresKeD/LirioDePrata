import React, { useEffect, useState } from 'react';
import './Header.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const UrlHead = "./assets/imagens/logo.png";

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const scrollToSection = (sectionId) => {
        const targetSection = document.getElementById(sectionId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth',
        });
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <Navbar expand="md">
                <Navbar.Brand href="#">
                    <img style={{ width: '100px' }} src={UrlHead} alt="Logo" />
                </Navbar.Brand>
                <Button className="navbar-toggler button-toggle" onClick={toggleSidebar}>
                    <span className="navbar-toggler-icon"></span>
                </Button>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav>
                        <Link to="/" onClick={() => scrollToSection('contato')} className="nav-link">HOME</Link>
                        <Link to="/" onClick={() => scrollToSection('contato')} className="nav-link">SOBRE</Link>
                        <Link to="/cardapio" className="nav-link">CARDÁPIO</Link>
                        <Link to="/" onClick={() => scrollToSection('contato')} className="nav-link">CONTATO</Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="ghost-div" />
            </Navbar>

            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <Button className="close-btn" onClick={toggleSidebar}>×</Button>
                <Nav className="flex-column">
                    <Link to="/" onClick={() => scrollToSection('contato')} className="nav-link">HOME</Link>
                    <Link to="/" onClick={() => scrollToSection('contato')} className="nav-link">SOBRE</Link>
                    <Link to="/cardapio" className="nav-link">CARDÁPIO</Link>
                    <Link to="/" onClick={() => scrollToSection('contato')} className="nav-link">CONTATO</Link>
                </Nav>
            </div>
        </header>
    );
}

export default Header;
