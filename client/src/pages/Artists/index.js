import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import Image from '../../components/Image'
import artists from './artsists.json'
class Artist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            artists:[]
        }
    }
    componentDidMount() {
        this.setState({
            artists: artists
        }, console.log(this.state.artists))
    }
    render() {
        
        return (
            <>
                <Row>
                    <Col>
                        <h2 className="white">Artists</h2>
                        {this.state.artists.map(artist => 
                            <div className="artistDiv">
                                <Row>
                                    <Col sm={6} md={3}>
                                        {/* Profile Pic */}
                                        <Image src={artist.image} height={250} width={250} alt={`${artist.name} on the House of Sunsets`} />
                                        {/* Artist Name */}
                                        <h2 className="artistName white">{artist.name}</h2>
                                    </Col>
                                    <Col sm={4} md={3} className="text-left white">
                                        {/* Profile Info*/}
                                            {/* Name */}
                                            <p><strong>Name:</strong> {artist.name}</p>
                                            {/* Bio */}
                                            <p><strong>Bio:</strong> {artist.bio}</p>
                                            {/* Hometown */}
                                            <p><strong>Hometown:</strong> {artist.hometown}</p>
                                            {/* Genre */}
                                            <p><strong>Genre:</strong> {artist.genre}</p>
                                            {/* Soundcloud */}
                                            <p><strong>Soundcloud:</strong> {artist.soundcloud}</p>
                                            {/* Instagram */}
                                            <p><strong>Instagram:</strong> {artist.instagram}</p>
                                    </Col>
                                    <Col sm={4} md={6}>
                                        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${artist.SC_ID}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}></iframe>
                                    </Col>
                                </Row>
                            </div>
                        )}
                    </Col>
                </Row>
                {/* </Container> */}
            </>
        )
    }
}
export default Artist