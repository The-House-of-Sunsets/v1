import React, { Component } from 'react'
import './style.css'
import Image from '../../components/Image'
import img1 from '../../images/sean-til-dawn-41720-thumb.png'
class Sunsets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoID: this.props.videoID,
            hasVideo: false
        }
        this.handleSunsetClick = this.handleSunsetClick.bind(this)
    }
    
    handleSunsetClick() {
        this.setState({videoID: 'D-b_igt-DBk'},() =>
        this.setState({hasVideo: true}, () =>  this.props.videoID(this.state.videoID)))
    }
render(){
    const videoID = this.props.videoID
    return (
        <div>
            <h3 className="white">
                Sunsets
            </h3>
            <div className="flex-container">
                <div className="item">
                    <a className="sunSet" onClick={() => this.handleSunsetClick}>
                        <Image  src={img1} width="250" height="auto" alt="Sean til Dawn - House of Sunsets"/>
                    </a>
                </div>
                

            </div>
        </div>
    )
}
}
export default Sunsets