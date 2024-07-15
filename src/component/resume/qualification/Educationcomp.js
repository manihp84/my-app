import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { EducationData } from "../../../Data/Data";
import './Educationcomp.css';
const Educationcomp = () => {
    return (
        <>
            <Container>
                <Row>
                    {
                        EducationData.map((ele, index) => {
                            return (
                                <>
                                    <Col md={12}>
                                        <div className="title">
                                            <h2 className="hello">{ele.heading}</h2>

                                        </div>
                                        <Row>
                                            <Col md={3} className="education">
                                                <div className="resume">
                                                    <div className="resume-summary">
                                                        <h6 className="resume-year">{ele.date}</h6>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className="resume-details">

                                                    <h5>{ele.heading_1}</h5>
                                                    <h6>{ele.title}</h6>
                                                    <p>{ele.content}</p>
                                                </div>
                                            </Col>
                                            <Col md={3} className="education">
                                                <div className="resume">
                                                    <div className="resume-summary">
                                                        <h6 className="resume-year">{ele.date_2}</h6>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className="resume-details">

                                                    <h5>{ele.heading_2}</h5>
                                                    <h6>{ele.title_2}</h6>
                                                    <p>{ele.content_2}</p>
                                                </div>
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

export default Educationcomp;