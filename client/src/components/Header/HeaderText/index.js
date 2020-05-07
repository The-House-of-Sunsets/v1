import React from 'react'

const HeaderText = (props) => {
    return (
        <>
            <h1 className="headerTextStyle"><strong>{props.text}</strong></h1>
        </>
    )
}
export default HeaderText