import React from 'react'
import './style.css'
// const arr = [{name:"1", link:"google.com"},"2","3"]
const ContentOverlay = (props) => {
    return (
        <>
            <div className={`overlay ${props.isOpen && "showNav" || "hideNav"}`}>
                
            </div>
        </>
    )
}
export default ContentOverlay