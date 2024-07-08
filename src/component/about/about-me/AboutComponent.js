import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AboutData } from "../../../Data/Data";
import './AboutComponent.css';


const AboutComponent = () =>{


    return(
        <>
       <Container>
        <Row>
{
    AboutData.map((ele, index)=>{
        return(
            <>
            <Col md={12}>
            <div className="title">
                <h1 className="hello">{ele.heading}</h1>
                <span>{ele.heading}</span>
            </div>
            <Row>
                <Col md={6}>
                <div className="about-img">
                    {/* <img src={ele.imgsrc} alt="img"/> */}
                </div>
                
                </Col>
                <Col md={6}></Col>
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