import React from 'react'
import hosLogo from './house-of-sunsets-logo.png'
import SubText from '../SubText'
let h1Style = {
    "color": "#fff",
    "text-align": "center"
}
let headerDivStyle = {
    "width":"80%",
    "margin":"20px auto 0 auto",
    "textAlign":"center"
}
const Header = () => {
    return (
        <>
            <div id="hos-header" style={headerDivStyle}>
                
                <img src={hosLogo} height="auto" width="35%" alt="The House of Sunsets Logo" />
                {/*<h1 style={h1Style}>House of Sunsets</h1>*/}
                <SubText text={`Where the beauty of sunsets and music reside`} />
            </div>
        </>
    )
}
export default Header