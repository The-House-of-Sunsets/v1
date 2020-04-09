import React, {Component} from 'react'
import './style.css'
// const arr = [{name:"1", link:"google.com"},"2","3"]
const NavMenu = (props) => {
    let links = props.links;
    let ul = document.querySelectorAll("ul")
    const items = [];
    [...links].forEach((child, i) => 
        items.push(
            <li key={i}><a href={child.link}>{child.name}</a></li>
    ))
    return (
        <>
            <div id="navMenuStyle" className={props.isOpen && "showNav" || "hideNav"}>
                <ul>
                    {items}
                </ul>
            </div>
        </>
    )
}
export default NavMenu