import React, { useState } from 'react'
import ContentOverlay from './Content'
import './style.css'
const Overlay = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
      <div class="overlayStyle">
        <div>
          {props.children}
        </div>
      </div>
      <ContentOverlay isOpen={isOpen}/>
    </>
  );
}
export default Overlay;