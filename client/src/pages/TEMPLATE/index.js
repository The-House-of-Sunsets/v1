import React, {Component} from 'react'
import {Col, Row} from 'reactstrap'
//pages
//components
import Header from '../../components/Header'
import Image from '../../components/Image'
//images
import hosLogo from '../../images/house-of-sunsets-logo.png'
import backgroundImage from '../../images/house-of-sunsets-sunset.jpg'

//styles
import './style.css'
const Template = () => {
    let style = {
        "backgroundImage": `url(${backgroundImage})`
    }
    return (
        <>
            <div className="masterContent containerStyle" style={style}>
                <Row>
                    <Col md="12">
                        <Header 
                            text="Header Text"
                            subtext="Subtext" 
                            image>
                            <Image src={hosLogo} height="auto" width="35%" alt="The House of Sunsets Logo" />
                        </Header>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        {/* Content */}
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <div id="headerBottomRow">
                            {/* Content */}
                        </div>
                    </Col>
                </Row>
            </div>
            <div id="bgOverlay"></div>
        </>
    )
}
export default Template