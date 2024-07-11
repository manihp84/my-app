import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AboutData } from "../../../Data/Data";
import Card from 'react-bootstrap/Card';
import './AboutComponent.css';



const AboutComponent = () => {


    return (
        <>
            <Container>
                <Row>
                    {
                        AboutData.map((ele, index) => {
                            return (
                                <>
                                    <Col md={12}>
                                        <div className="title">
                                            <h1 className="hello">{ele.heading}</h1>
                                            <span>{ele.heading}</span>
                                        </div>
                                        <Row>
                                            <Col lg={6} Col={12}>
                                                <div className="about-me">
                                                    <h3 className="text-color">{ele.heading_2}
                                                        <span className="colorchange"> {ele.clchange} </span>
                                                    </h3>
                                                    <p>{ele.content}</p>
                                                    <ul>
                                                        <li>
                                                            <b>{ele.listitem}</b>
                                                            {ele.name}
                                                        </li>
                                                        <li>
                                                            <b>{ele.listitem_1}</b>
                                                           {ele.age}
                                                        </li>
                                                        <li>
                                                            <b>{ele.listitem_2}</b>
                                                            {ele.nation}
                                                        </li>
                                                        <li>
                                                            <b>{ele.listitem_3} </b>
                                                          
                                                            {ele.address}
                                                        </li>
                                                        <li>
                                                            <b>{ele.listitem_4} </b>
                                                          
                                                            {ele.freelance}
                                                        </li>
                                                    </ul>

                                                </div>

                                            </Col>
                                            <Col lg={6} Col={12}>
                                                <div className="about-img">
                                                    <Card style={{ width: '18rem' }}>
                                                        <Card.Img variant="top" src={ele.imgsrc} />
                                                        <span className="about-icon">{ele.searchicon}</span>
                                                    </Card>

                                                </div></Col>
                                        </Row>
                                    </Col>
                                </>
                            )
                        })
                    }

                </Row>
            </Container>
        </>
    )
}

export default AboutComponent;