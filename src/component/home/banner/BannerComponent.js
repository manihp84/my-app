import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './BannerComponent.css';
import { BannerData } from "../../../Data/Data";
const BannerComponent = () => {
    return (
        <>
            <Container fluid>
                <Row className="justify-content-center">
                    {
                        BannerData.map((ele, index) => {
                            return (
                                <Col md={9}>
                                    <h1 className="bg-2">{ele.heading}<span className="colorchange">{ele.clchange}</span></h1>
                                    <p className={ele.clchange_1}>{ele.content}</p>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    );
}

export default BannerComponent;
