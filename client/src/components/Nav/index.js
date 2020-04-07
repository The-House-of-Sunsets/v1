import React, { useState } from 'react';
import NavMenu from './NavMenu'
import './style.css'
const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div id="navStyle">
        <div>
          <span id="navMenu" class="oi oi-sun"></span>
        </div>
      </div>
      <NavMenu links={props.links} />
    </>
  );
}
export default Navigation;