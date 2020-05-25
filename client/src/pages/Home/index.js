import React, {Component} from 'react'
import {Col, Row} from 'reactstrap'
//pages
import Artists from '../Artists'
//components
import Header from '../../components/Header'
// import VideoPlayer from '../../components/VideoPlayer'
import Image from '../../components/Image'
import Sunsets from '../SunSets'
//images
import hosLogo from './house-of-sunsets-logo.png'
import CountdownTimer from '../../components/Countdown'
//data
//styles
import './style.css'
import Calendar from '../../components/Calendar'
import artists from '../SunSets/sunsets.json' 

class Home extends Component {
    constructor() {
        super()
        this.state = {
            videoID: '',
            hasVideo: false
        }
    }
    render() { 
        let featureVid = artists.filter((item) => {return item.featured})
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
                <div className="masterContent containerStyle">
                    <Row>
                        <Col md={12}>
                            <Image src={hosLogo} height="auto" width="30%" alt="The House of Sunsets Logo" />
                            <h4 className="curly white">
                                <strong>Next Sunset:</strong></h4>
                            <CountdownTimer />
                            <Header 
                                text="Villalobos"
                                subtext="Sunday, May 24 at 630pm til Dark" 
                                image>
                            </Header>
                        </Col>
                    </Row>
                    <Row>
                        <Calendar/>
                    </Row>
                    <Sunsets  videoID={featureVid[0].vid} hasVideo={this.state.hasVideo}/>
                    {/* <Artists/> */}
                </div>
            </>
        )
    }
}
export default Home