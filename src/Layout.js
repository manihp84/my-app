import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import Headercomponent from './component/home/Header/HeaderComponent';
import Themecomponent from './component/home/Header/Theme';
const Layout = () => {
    return (
        <Container fluid className='bg-all'>
            <Row>
                <Col md={3} className="bg-light">
                <Headercomponent />
                <Themecomponent/>
                    {/* Left column content */}
                </Col>
                <Col md={9} className='padding'>
                    <Outlet />
                    
                </Col>
            </Row>
        </Container>
    );
};

export default Layout;
