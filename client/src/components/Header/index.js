import React from 'react'
import HeaderText from './HeaderText'
import SubHeaderText from './HeaderSubText'
import Image from '../Image'
import './style.css'
let h1Style = {
    "color": "#fff",
    "text-align": "center"
}
let headerDivStyle = {
    "width":"80%",
    "margin":"30px auto 0 auto",
    "textAlign":"center"
}
const Header = (props) => {
    const {text, subtext, children, image} = props;
    return (
        <>
            <div id="hos-header" className="headerDivStyle">
                
                {image ? children : ""}
                <HeaderText text={text} />
                <SubHeaderText text={subtext} />
            </div>
        </>
    )
}
export default Header