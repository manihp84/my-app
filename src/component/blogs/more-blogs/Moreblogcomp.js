import React from "react";
import { MoreblogData } from "../../../Data/Data";
import { Col, Container, Row, Image } from "react-bootstrap";
import './Moreblogcomp.css';
const Moreblogcomp = () => {
    return (
        <>
            <Container>
                <Row>
                    {
                        MoreblogData.map((ele, index) => {
                            return (
                                <>
                                    <Col md={12} key={index}>
                                        <Row>
                                            <Col lg={6} md={6} Col={12} className="mt-30">
                                            <div className="blog">
                                            <div className="blog-img">
                                            <Image src={ele.imgsrc} fluid/>
                                            <div className="blog-date">
                                                <span className="date">15</span>
                                                <span className="month">july</span>
                                            </div>
                                            </div>
                                            <div className="blog-content">
                                            <h5>{ele.content}</h5>
                                            </div>
                                            </div>

                                            </Col>
                                            <Col lg={6} md={6} Col={12} className="mt-30">
                                            <div className="blog">
                                            <div className="blog-img">
                                            <Image src={ele.imgsrc_2} fluid/>
                                            <div className="blog-date">
                                                <span className="date">15</span>
                                                <span className="month">july</span>
                                            </div>
                                            </div>
                                            <div className="blog-content">
                                            <h5>{ele.content_2}</h5>
                                            </div>
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

export default Moreblogcomp;