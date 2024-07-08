import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Headerdata } from "../../../Data/Data";
import { NavLink } from 'react-router-dom';
import './HeaderComponent.css';

const Headercomponent = () => {
    const [theme, setTheme] = useState('black-theme');
    const [navOpen, setNavOpen] = useState(false);

    const toggleTheme = () => {
        const newTheme = theme === 'black-theme' ? 'white-theme' : 'black-theme';
        setTheme(newTheme);
        document.body.className = newTheme;
    };

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
                <i className={`fas ${theme === 'black-theme' ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <Container fluid>
                <Row>
                    {Headerdata.map((ele, index) => (
                        <Col md={12} className="bg" key={index}>
                            <Row>
                                <Col md={12}>
                                    <div className="header-inner">
                                        <div className="header-img">
                                            <img src={ele.imgsrc} alt="Mani" className={ele.clchange} />
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} className="navbar-fixed bg-1">
                                <button className="nav-toggle-btn" onClick={toggleNav}>
                            <i className="fas fa-bars"></i>
                        </button>
                        <nav className={`navbar-custom ${navOpen ? 'open' : ''}`}>
                            <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
                            <NavLink to="/About" className="nav-link" activeClassName="active">About</NavLink>
                            <NavLink to="/blogs" className="nav-link" activeClassName="active">Blogs</NavLink>
                            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
                            <NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink>
                            <NavLink to="/resume" className="nav-link" activeClassName="active">Resume</NavLink>
                        </nav>
                        <div className="rights">
                        {/* <p>@ All rights reserved </p> */}
                        
                        </div>
                                </Col>

                            </Row>
                          
                        </Col>          
                    ))}
                    
                </Row>              
            </Container>
        </>
    );
}

export default Headercomponent;
