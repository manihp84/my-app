import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ResumeData } from "../../../Data/Data";
import './Resumecomponent.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
const Resumecomponent = () => {
    return (
        <>
            <Container>
                <Row>
                    {
                        ResumeData.map((ele, index) => {
                            return (
                                <>
                                    <Col md={12}>
                                        <div className="title">
                                            <h1 className="hello">{ele.heading}</h1>
                                            <span>{ele.heading}</span>
                                        </div>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="my-progress">
                                                    <h6 className="progress-title">{ele.heading_1}</h6>
                                                    <div className="progress-inner">
                                                        <div className="progress-percentage">
                                                        {ele.content}
                                                        </div>
                                                        <div className="progress-container">
                                                        <ProgressBar now={90} label="90%" className="custom-progress-bar" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-progress">
                                                    <h6 className="progress-title">{ele.heading_3}</h6>
                                                    <div className="progress-inner">
                                                        <div className="progress-percentage">
                                                        {ele.content_3}
                                                        </div>
                                                        <div className="progress-container">
                                                        <ProgressBar now={60} label="60%" className="custom-progress-bar" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-progress">
                                                    <h6 className="progress-title">{ele.heading_6}</h6>
                                                    <div className="progress-inner">
                                                        <div className="progress-percentage">
                                                        {ele.content_6}
                                                        </div>
                                                        <div className="progress-container">
                                                        <ProgressBar now={60} label="60%" className="custom-progress-bar" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-progress">
                                                    <h6 className="progress-title">{ele.heading_8}</h6>
                                                    <div className="progress-inner">
                                                        <div className="progress-percentage">
                                                        {ele.content_8}
                                                        </div>
                                                        <div className="progress-container">
                                                        <ProgressBar now={65} label="65%" className="custom-progress-bar" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                            <div className="my-progress">
                                                    <h6 className="progress-title">{ele.heading_2}</h6>
                                                    <div className="progress-inner">
                                                        <div className="progress-percentage">
                                                        {ele.content_2}
                                                        </div>
                                                        <div className="progress-container">
                                                        <ProgressBar now={85} label="85%" className="custom-progress-bar" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-progress">
                                                    <h6 className="progress-title">{ele.heading_4}</h6>
                                                    <div className="progress-inner">
                                                        <div className="progress-percentage">
                                                        {ele.content_4}
                                                        </div>
                                                        <div className="progress-container">
                                                        <ProgressBar now={80} label="80%" className="custom-progress-bar" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-progress">
                                                    <h6 className="progress-title">{ele.heading_5}</h6>
                                                    <div className="progress-inner">
                                                        <div className="progress-percentage">
                                                        {ele.content_5}
                                                        </div>
                                                        <div className="progress-container">
                                                        <ProgressBar now={70} label="70%" className="custom-progress-bar" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-progress">
                                                    <h6 className="progress-title">{ele.heading_7}</h6>
                                                    <div className="progress-inner">
                                                        <div className="progress-percentage">
                                                        {ele.content_7}
                                                        </div>
                                                        <div className="progress-container">
                                                        <ProgressBar now={70} label="70%" className="custom-progress-bar" />
                                                        </div>
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

export default Resumecomponent;