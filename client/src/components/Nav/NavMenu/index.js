import React from 'react'
import './style.css'
// const arr = [{name:"1", link:"google.com"},"2","3"]
const NavMenu = (props) => {
    let links = props.links;
       [links].forEach((child, index) => {
           let ul = document.querySelector("div ul")
           if (ul) {
               links.forEach(child => 
                {
                    // return <li>{child.name}</li>
                    ul.appendChild(document.createElement("li")).innerHTML = `<a href='${child.link}'>${child.name}</a>`;
                })
           }
       })

    return (
        <>
            <div id="navMenuStyle">
                <ul></ul>
            </div>
        </>
    )
}
export default NavMenu