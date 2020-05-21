import React from 'react';
import {Row, Col,Container} from 'reactstrap'
import { Facebook, Instagram, Twitter, Youtube, Twitch } from '@icons-pack/react-simple-icons';
import './style.css'
const Footer = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={12} className="mt-3">
                        <span className="branding">House of Sunsets&trade;2020 | <a href="mailto:thehouseofsunsets@gmail.com">thehouseofsunsets@gmail.com</a></span>
                    </Col>
                    {/*<Col md={3}>
                        <div className="inline text-md-right">
                            <a href="#" className="footerLink"><Facebook/></a>  <a href="#" className="footerLink"><Instagram/></a>  <a href="#" className="footerLink"><Twitter/></a>  <a href="#" className="footerLink"><Youtube/></a>  <a href="#" className="footerLink"><Twitch/></a>
                        </div>
    </Col>*/}
                </Row>
            </Container>
        </>
    )
}
export default Footer;