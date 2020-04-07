import React from 'react'
import hosLogo from './house-of-sunsets-logo.png'
import HeaderText from './HeaderText'
import SubHeaderText from './HeaderSubText'
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
    return (
        <>
            <div id="hos-header" style={headerDivStyle}>
                
                <img src={hosLogo} height="auto" width="35%" alt="The House of Sunsets Logo" />
                {/*<h1 style={h1Style}>House of Sunsets</h1>*/}
                <HeaderText text={props.text} />
                <SubHeaderText text={props.subtext} />
            </div>
        </>
    )
}
export default Header