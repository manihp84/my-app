import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import Headercomponent from './component/home/Header/HeaderComponent';
const Layout = () => {
    return (
        <Container fluid className='bg-all'>
            <Row>
                <Col Col xs={12} sm={3} md={3} lg={3} xl={3} className="bg-light">
                <Headercomponent />
                    {/* Left column content */}
                </Col>
                <Col Col xs={12} sm={9} md={9} lg={9} xl={9} className='padding'>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
};

export default Layout;
