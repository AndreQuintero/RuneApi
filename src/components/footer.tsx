import React from 'react';
import {Row, Col} from 'reactstrap';

const Footer = () => (
    <footer className="container-fluid">
        <Row className="footer-row">
           <Col className="footer-title" xs="12">
                <h1>André Quintero</h1>
           </Col>
           <Col className="footer-contact" xs='12'>
                <label>Email: </label>
                <label>andre.quintero96@gmail.com</label>
           </Col>
           <Col className="footer-contact" xs='12'>
                <label>Telefone: </label>
                <label>(11) 97078-8248</label>
           </Col>
           <Col xs='12' className="footer-sociais">
            <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/andre.quintero.37">
                <i className="fab fa-facebook-f  social"></i>
            </a>	
            <a target='_blank' rel="noopener noreferrer" href="https://github.com/AndreQuintero">
                <i className="fab fa-github-alt social"></i>
            </a>
            <a  target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/andrequintero/"> 
                <i className="fab fa-linkedin-in social"></i>
            </a>
           </Col>
        </Row>
    </footer>
);

export default Footer;