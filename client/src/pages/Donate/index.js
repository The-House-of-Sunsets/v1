import React, {Component} from 'react';
//components
import DonateContent from './DonateContent'
import { Row, Col, Container } from 'reactstrap';
import Image from '../../components/Image'
import sunsetImage from '../../images/sunset1.jpg'
import './style.css';
class Donate extends Component {
    render() {
        return (
            <>
                <Container id="containerStyle">
                    <div className="masterContent">
                        <Row className="bg-color">
                            <Col md={4} className="mt-4">
                                <Image src={sunsetImage} width={"100%"} height={"auto"} alt={"House of Sunsets San Diego Sunset"} />
                            </Col>
                            <Col md={8}>
                                <DonateContent />
                            </Col>
                        </Row>
                    </div>
                    <div id="bgOverlay"></div>
                </Container>
            </>
        );
    }
}
export default Donate;