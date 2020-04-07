import React from 'react'
let headerTextStyle = {
    "color":"#ffffff",
    "textAlign":"text-center",
    "margin":"20px auto"
}
const HeaderText = (props) => {
    return (
        <>
            <h1 style={headerTextStyle}>{props.text}</h1>
        </>
    )
}
export default HeaderText