import React from 'react'
import HeaderText from './HeaderText'
import SubHeaderText from './HeaderSubText'
import './style.css'

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