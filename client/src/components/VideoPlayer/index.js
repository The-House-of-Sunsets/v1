import React, {Component} from 'react'
import YouTube from 'react-youtube';
import './style.css'
class VideoPlayer extends Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            },
        };
        return (
            <div className="videoPlayerStyle">
                <YouTube videoId = "w3nH0uEHh7Y"
                    opts = {
                        opts
                    }
                    onReady = {
                        this._onReady
                    }
                    className={"videoStyle"}
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