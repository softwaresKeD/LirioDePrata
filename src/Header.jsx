import React, { useEffect, useState } from 'react';
import './index.css';
import { Navbar, Nav, Container, Button  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const UrlHead = "./src/assets/logo.png";

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
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <Container className="custom-container">
                <Navbar expand="lg">
                    <Navbar.Brand href="#">
                        <img style={{ width: '100px' }} src={UrlHead} alt="Logo" />
                    </Navbar.Brand>
                    <Button className="navbar-toggler" onClick={toggleSidebar}>
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav>
                            <Nav.Link onClick={() => scrollToSection('home')}>HOME</Nav.Link>
                            <Nav.Link onClick={() => scrollToSection('sobre_mim')}>SOBRE</Nav.Link>
                            <Nav.Link onClick={() => scrollToSection('cardapio')}>CARDÁPIO</Nav.Link>
                            <Nav.Link onClick={() => scrollToSection('contato')}>CONTATO</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="ghost-div" />
                </Navbar>
            </Container>
            
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <Button className="close-btn" onClick={toggleSidebar}>×</Button>
                <Nav className="flex-column">
                    <Nav.Link onClick={() => { scrollToSection('home'); toggleSidebar(); }}>HOME</Nav.Link>
                    <Nav.Link onClick={() => { scrollToSection('sobre_mim'); toggleSidebar(); }}>SOBRE</Nav.Link>
                    <Nav.Link onClick={() => { scrollToSection('cardapio'); toggleSidebar(); }}>CARDÁPIO</Nav.Link>
                    <Nav.Link onClick={() => { scrollToSection('contato'); toggleSidebar(); }}>CONTATO</Nav.Link>
                </Nav>
            </div>
        </header>
    );
}

export default Header;
