import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = (props) => {
    let branding = {
        "color":"white",
        "margin": "7px 20px",
        "fontWeight":"bold",
        "fontSize":"18px"
    }
    let navStyle = {
        "padding":"20px",
        "backgroundColor":"rgba(0,0,0,0.8)"
    }
  return (
    <div>
      <Nav style={navStyle}>
          <span style={branding}>House of Sunsets</span>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;