import React, {Component} from 'react'
import {Container, Col, Row} from 'reactstrap'
import backgroundImage from './house-of-sunsets-sunset.jpg'
import Header from "../../components/Header"
import Navigation from "../../components/Nav"
class Home extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    
    render() {
        let style = {
            "backgroundImage": `url(${backgroundImage})`,
            "backgroundPosition": "center",
            "backgroundSize": "cover",
            "backgroundRepeat": "no-repeat",
            "height":"100vh",
            "width":"100vw",
            "maxWidth":"100vw"
        }
        let bgImageOverlay = {
            "height":"100vh",
            "width":"100vw",
            "backgroundColor": "rgb(2,0,36)",
            "background": "linear-gradient(0deg, rgba(2,0,36,1) 15%, rgba(255,255,255,0) 80%)",
            "position": "absolute",
            "left": 0,
            "top": 0
        }
        return (
            <>
                {/*
                    - Background (full width and height)
                    - Logo
                    - Header text
                    - Sub-paragraph text
                    - Button
                    - Stream buttons
                    - Past streams
                    - Artists
                    - Venues
                    - About
                    - Follow Links
                    - Footer
                    - Contact
                */}
                <Navigation />
                <Container style={style}>
                <div id="imageOverlay" style={bgImageOverlay}></div>

                    <Col md="12">
                        <Row>
                            <Header />
                        </Row>
                    </Col>
                </Container>

            </>
        )
    }
}
export default Home