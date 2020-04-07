import React from 'react'
let subHeaderStyle = {
    "color":"#ffffff"
}
const SubTextHeader = (props) => {
    return (
        <>
            <h3 style={subHeaderStyle}>{props.text}</h3>
        </>
    )
}
export default SubTextHeader