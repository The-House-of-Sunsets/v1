import React,{Component} from 'react'
import {Row, Col} from 'reactstrap'
import ReactTwitchEmbedVideo from 'react-twitch-embed-video'
 
import Image from '../../components/Image'
import artists from './sunsets.json' 
import './style.css'
class Sunsets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoID: props.videoID,
            hasVideo: props.hasVideo
        }
    }
    handleSunsetClick = (item) => {
        this.setState({videoID: item},() =>
            this.setState({hasVideo: true}) 
        )
    }
    
    render() {
        let goingLive = false;
        return (
            <>
                <Row>
                    <Col md={12}>
                        {this.state.videoID !== '' && <div className="videoPlayerStyle">
                            
                            {goingLive ? <ReactTwitchEmbedVideo channel="thehouseofsunsets" /> : <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.state.videoID}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>}
                        </div>}
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h3 className="white">
                            Sunsets
                        </h3>
                        <div className="flex-container">
                            {artists.map((item,i) => 
                                <div className="item sunset" key={i}>
                                    <a className="sunSet dark" onClick={() => this.handleSunsetClick(item.vid)}>
                                        <Image src={item.img} width="250" height="auto" alt={item.alt}/>
                                        <p className="dark whiteBg text-center">{`${item.desc} - ${item.date}`}</p>
                                    </a>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Sunsets