import React from "react";
import './AboutService.css';
import { Col, Container, Row } from "react-bootstrap";
import { AboutServiceData } from "../../../Data/Data";
import Card from 'react-bootstrap/Card';
const AboutService = () => {
    return (
        <>
            <Container>
                <Row>
                    {
                        AboutServiceData.map((ele, index) => {
                            return (
                                <>
                                    <Col md={12}>
                                        <div className="title">
                                            <h1 className="hello">{ele.heading}</h1>
                                            <span>{ele.heading}</span>
                                        </div>
                                        <Row>
                                            <Col lg={4} md={6} Col={12} >
                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Body>
                                                        <Card.Title>{ele.icon}</Card.Title>
                                                        <Card.Subtitle className="mb-2 text-muted">{ele.heading_2}</Card.Subtitle>
                                                        <Card.Text>
                                                            {ele.content}
                                                        </Card.Text>
                                                      
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={4} md={6} Col={12} >
                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Body>
                                                        <Card.Title>{ele.icon_2}</Card.Title>
                                                        <Card.Subtitle className="mb-2 text-muted">{ele.heading_3}</Card.Subtitle>
                                                        <Card.Text>
                                                          {ele.content_2}
                                                        </Card.Text>
                                                       
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={4} md={6} Col={12} >
                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Body>
                                                        <Card.Title>{ele.icon_3}</Card.Title>
                                                        <Card.Subtitle className="mb-2 text-muted">{ele.heading_4}</Card.Subtitle>
                                                        <Card.Text>
                                                           {ele.content_3}
                                                        </Card.Text>
                                                        
                                                    </Card.Body>
                                                </Card>
                                            </Col>
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

export default AboutService;