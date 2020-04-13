import React, {Component} from 'react'
import {Container} from 'reactstrap'
//components
import Navigation from "../../components/Nav"
//pages
import DonateBtn from '../Donate/DonateBtn'
import Home from '../Home'
import Donate from '../Donate'
//images
import './style.css'
class Index extends Component {
    constructor() {
        super()
        this.state = {
          links: null
        }
    }
    componentDidMount() {
        this.getLinks()
        .then(res => {JSON.stringify(res);
            this.setState({links: res})})
        .catch(err => console.log(err))
    }
    async getLinks() {
        const response =  await fetch("/api/v1_0/links")
        const body = await response.json();
        if(response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    }
    render() {
        let data = this.state.links || "no links here."
        
        return(
            <>
                <Navigation links={data} /> 
                <DonateBtn />
                <div id="masterContainer">
                    <main id="mainContent">
                            <Home />
                            <Donate />
                    </main>
                </div>
            </>
        )
    }
}
export default Index;