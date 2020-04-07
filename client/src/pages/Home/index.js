import React, {Component} from 'react'
import {Container, Col, Row} from 'reactstrap'
import backgroundImage from './house-of-sunsets-sunset.jpg'
import Header from "../../components/Header"
import Navigation from "../../components/Nav"
import VideoPlayer from '../../components/VideoPlayer'
class Home extends Component {
    constructor() {
        super()
        this.state = {
          links: []
        }
      }
    componentDidMount() {
        this.getLinks();
    }
    getLinks = () => {
        fetch("/api/v1_0/links", {
            method: "GET",
        }).then((res) => {
            console.log(res)
            this.setState({links: res})
        })
    }
    render() {
        console.log("blah: " + this.state.links)
        let style = {
            "backgroundImage": `url(${backgroundImage})`,
            "backgroundPosition": "center",
            "backgroundSize": "cover",
            "backgroundRepeat": "no-repeat",
            "height":"100vh",
            "width":"100vw",
            "maxWidth":"100vw",
            "maxHeight":"100vh"
        }
        let bgImageOverlay = {
            "height":"100vh",
            "width":"100vw",
            "backgroundColor": "rgb(0,0,0)",
            "background": "linear-gradient(0deg, rgba(0,0,0,1) 15%, rgba(255,255,255,0) 80%)",
            "position":"absolute",
            "top":0,
            "left":0
            
        }
        let mainContent = {
            "position":"absolute",
            "top":0,
            "left":0,
            "zIndex":1
        }
        let masterContainer = {
            "position":"absolute",
            "top":0,
            "left":0,
            "zIndex":0

            
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
                <Navigation links={this.state.links} /> 
                <div style={masterContainer}>
                    <div id="imageOverlay" style={bgImageOverlay}></div>
                    <main id="mainContent" style={mainContent}>
                        <Container style={style}>
                            <Col md="12">
                                <Row>
                                    <Header 
                                        text="Where the beauty of sunsets and music reside"
                                        subtext="This is some subtext where we can put additional content"

                                    />
                                </Row>
                                <Row>
                                    <VideoPlayer />
                                </Row>
                            </Col>
                        </Container>
                    </main>
                </div>
            </>
        )
    }
}
export default Home