import React, {Component} from 'react'
import YouTube from 'react-youtube';
class VideoPlayer extends Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };
        let videoPlayerStyle = {
            "textAlign":"center",
            "width":"100%",
            "margin":"30px auto"
        }
        return (
            <div style={videoPlayerStyle}>
                <YouTube videoId = "9GWWu34VhJs"
                    opts = {
                        opts
                    }
                    onReady = {
                        this._onReady
                    }
                />
            </div>
        )
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}
export default VideoPlayer