import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import Image from '../../components/Image'
class Artist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            artists:[]
        }
    }
    componentDidMount() {
        this.setState({
            artists: [
                {
                    "name":"HIM",
                    "image":"https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/41199879_989252351247790_6648275436205768704_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=XiHlgkdhjdUAX964K2y&_nc_ht=scontent-lax3-2.xx&oh=bafaf202eaa21e25fa146ed354a98202&oe=5ED3EFD0",
                    "hometown":"hometown",
                    "bio":"bio",
                    "genre":"genre",
                    "soundcloud":"soundcloud",
                    "instagram":"instagram"

                }
            ]
        }, console.log(this.state.artists))
    }
    render() {
        
        return (
            <>
                <Row>
                    <Col>
                        <h2 className="white">Artists</h2>
                        {this.state.artists.map(artist => 
                            <Row>
                                <Col>
                                    {/* Profile Pic */}
                                    <Image src={artist.image} height={250} width={250} alt={`${artist.name} on the House of Sunsets`} />
                                    {/* Artist Name */}
                                    <h2 className="artistName white">{artist.name}</h2>
                                </Col>
                                <Col className="text-left white">
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
                            </Row>
                        )}
                    </Col>
                </Row>
                {/* </Container> */}
            </>
        )
    }
}
export default Artist