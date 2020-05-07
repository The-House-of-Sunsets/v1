import React, { useState } from 'react';
import NavMenu from './NavMenu'
import './style.css'
const Navigation = (props) => {
  console.log(props.links)
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
      <div id="navStyle">
        <div>
          <a id="navLink" onClick={toggle} href="javascript:void(0)"><span id="navMenu" className={`navIcon ${!isOpen ? "oi oi-sun" : "openIt oi oi-moon"}`}></span></a>
        </div>
      </div>
      <NavMenu links={props.links} isOpen={isOpen}/>
    </>
  );
}
export default Navigation;