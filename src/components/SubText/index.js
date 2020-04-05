import React from 'react'
let subTextStyle = {
    "color":"#ffffff",
    "textAlign":"text-center",
    "margin":"20px auto"
}
const SubText = (props) => {
    return (
        <>
            <h3 style={subTextStyle}>{props.text}</h3>
        </>
    )
}
export default SubText