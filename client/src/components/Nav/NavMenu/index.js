import React, {Component} from 'react'
import './style.css'
// const arr = [{name:"1", link:"google.com"},"2","3"]
class NavMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            links: this.props.links
        }
    }
    componentDidMount() {
        console.log(this.state.links)
    }
    render() {
        return (
            <>
                <div id="navMenuStyle">
                    <ul>
                        {/*arr.map(item =><li><a href={item.link}>{item.name}</a></li>)*/}
                    </ul>
                </div>
            </>
        )
    }
}
export default NavMenu