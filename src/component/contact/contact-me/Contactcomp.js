import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ContactData } from "../../../Data/Data";
import './Contactcomp.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactcomp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6o33anb', 'template_53g97ej', e.target, 'KlPHlbKEaPfPeLieb')
            .then((result) => {
                console.log(result.text);
                toast.success("Email sent successfully!");
            }, (error) => {
                console.log(error.text);
                toast.error("Failed to send email. Please check the console for more details.");
            })
            .catch((error) => {
                console.error("EmailJS error: ", error);
                toast.error("An unexpected error occurred. Please check the console for more details.");
            });

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            <ToastContainer />
            <Container>
                <Row>
                    {
                        ContactData.map((ele, index) => (
                            <Col md={12} key={index}>
                                <div className="title">
                                    <h1 className="hello">{ele.heading}</h1>
                                    <span>{ele.heading}</span>
                                </div>
                                <Row>
                                    <Col lg={6} Col={12}>
                                        <div className="contactform">
                                            <h4>{ele.heading_1}</h4>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-field">
                                                    <label>Enter your name*</label>
                                                    <input 
                                                        type="text" 
                                                        name="name" 
                                                        value={formData.name} 
                                                        onChange={handleChange} 
                                                        required 
                                                    />
                                                </div>
                                                <div className="form-field">
                                                    <label>Enter your email*</label>
                                                    <input 
                                                        type="email" 
                                                        name="email" 
                                                        value={formData.email} 
                                                        onChange={handleChange} 
                                                        required 
                                                    />
                                                </div>
                                                <div className="form-field">
                                                    <label>Enter your subject*</label>
                                                    <input 
                                                        type="text" 
                                                        name="subject" 
                                                        value={formData.subject} 
                                                        onChange={handleChange} 
                                                        required 
                                                    />
                                                </div>
                                                <div className="form-field">
                                                    <label>Enter your message*</label>
                                                    <textarea 
                                                        name="message" 
                                                        value={formData.message} 
                                                        onChange={handleChange} 
                                                        required
                                                    />
                                                </div>
                                                <div className="form-field">
                                                    <button type="submit">Send Mail</button>
                                                </div>
                                            </form>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default Contactcomp;
