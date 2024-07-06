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
                                    <ul className="socialicons">
                                        <li><a href={ele.link}>{ele.Facebook}</a></li>
                                        <li><a href={ele.link_2}>{ele.Instagram}</a></li>
                                        <li><a href={ele.link_3}>{ele.Github}</a></li>
                                    </ul>
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
