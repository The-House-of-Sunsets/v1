import React, {Component} from 'react'
import YouTube from 'react-youtube';
import './style.css'
class VideoPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoID: this.props.videoID
        }
    }

    componentWillReceiveProps() {
        this.setState({videoID: this.props.videoID}, () => {this.logfields()})
    }

    logfields = () => {
        const {videoID} = this.state
        console.log('here: ' + videoID)
    }
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            },
        };
        let videoID = this.state.videoID
        console.log('hey: ' + videoID)
        let video = null
        if(videoID !== '') {
                video = <div className="videoPlayerStyle">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/xOhpnU2_MxM?start=300&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
        }
        return (
            <>
                {video}
                </>
                
        )
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}
export default VideoPlayer