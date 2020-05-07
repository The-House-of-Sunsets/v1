import React, {Component} from 'react'
import {Container} from 'reactstrap'
//components
import Navigation from "../../components/Nav"
import Footer from '../../components/Footer'
//pages
import DonateBtn from '../Donate/DonateBtn'
import Home from '../Home'
//images
import backgroundImage from './house-of-sunsets-sunset.jpg'
import './style.css'
class Index extends Component {
    constructor() {
        super()
        this.state = {
          links: [{
            "link":"#sun-sets",
            "name":"Sun Sets"

        },{
            "link":"#artists",
            "name":"Artists"

        }]
        }
    }
    componentDidMount() {
        // this.getLinks()
        
        // .then(res => {JSON.stringify(res)
        //     console.log(res)
        //     this.setState({links: res})})
        // .catch(err => console.log(err))
    }
    getLinks = () => {
        
    }
    // async getLinks() {
    //     const response =  await fetch("/api/v1_0/links")
    //     const body = await response.json();
    //     if(response.status !== 200) {
    //         throw Error(body.message)
    //     }
    //     console.log("I have links",body)
    //     return body;

    // }
    render() {
        let data = this.state.links
        let style = {
            "backgroundImage": `url(${backgroundImage})`
        }
        return(
            <>
                <div id="masterContainer" style={style}>
                    <div id="bgOverlay"></div>
                </div>
                <div id="mainContainer">
                     <Container>
                        <main id="mainContent">
                            <Home />
                        </main>
                        {/* <Navigation links={data} /> 
                        <DonateBtn /> */}
                    </Container>
                    <footer>
                        <Footer/>
                    </footer>
                </div>
            </>
        )
    }
}
export default Index;