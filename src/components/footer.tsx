import React from 'react';
import {Row, Col} from 'reactstrap';
import styles from '../css/footer.module.css';

const Footer = () => (
    <footer className="container-fluid">
        <Row className={styles.footerRow}>
           <Col className={styles.footerTitle} xs="12">
                <h1>André Quintero</h1>
           </Col>
           <Col className={styles.footerContact} xs='12'>
                <label>Email: </label>
                <label>andre.quintero96@gmail.com</label>
           </Col>
           <Col className={styles.footerContact} xs='12'>
                <label>Telefone: </label>
                <label>(11) 97078-8248</label>
           </Col>
           <Col xs='12' className={styles.footerSociais}>
            <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/andre.quintero.37">
                <i className={`fab fa-facebook-f  ${styles.social}`}></i>
            </a>	
            <a target='_blank' rel="noopener noreferrer" href="https://github.com/AndreQuintero">
                <i className={`fab fa-github-alt ${styles.social}`}></i>
            </a>
            <a  target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/andrequintero/"> 
                <i className={`fab fa-linkedin-in ${styles.social}`}></i>
            </a>
           </Col>
        </Row>
    </footer>
);

export default Footer;