import React, {Component} from 'react'
import {Col, Row, Container} from 'reactstrap'
import Countdown from 'react-countdown';
//pages
//components
import Header from '../../components/Header'
import VideoPlayer from '../../components/VideoPlayer'
import Image from '../../components/Image'
import Button from '../../components/Button'
//images
import hosLogo from '../../images/house-of-sunsets-logo.png'
import backgroundImage from '../../images/house-of-sunsets-sunset.jpg'

//styles
import './style.css'
class Home extends Component {
    render() { 
        let style = {
            "backgroundImage": `url(${backgroundImage})`
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
                <div className="masterContent containerStyle" style={style}>
                    <Row>
                        <Col md="12">
                            <Header 
                                text="Where the beauty of sunsets and music reside"
                                subtext="Next Up: Sean Til Dawn (4/17)" 
                                image>
                                <Image src={hosLogo} height="auto" width="20%" alt="The House of Sunsets Logo" />
                            </Header>
                        </Col>
                    </Row>
                    <Row>
                        {/* Countdown Timer */}
                        <div className="countdownTimer">
                            <Countdown date={"2020-04-17T18:00:00"} />
                        </div>
                    </Row>
                    <Row>
                        <Col md="12">
                            <VideoPlayer className="videoClass"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <div id="headerBottomRow">
                                {/* Share Button */}
                                <Button btnColor="secondary"><span className='oi oi-share'></span> Share Stream</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div id="bgOverlay"></div>
            </>
        )
    }
}
export default Home