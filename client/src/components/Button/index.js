import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types'
import './style.css'
const Btn = (props) => {
    const {btnDiv, btnColor, children, className, action} = props
    return (
        <div className={btnDiv ? btnDiv : 'btnDiv'}>
            <Button className={className ? className : 'btnClass'} color={btnColor ? btnColor : 'link'} onClick={action}>{ children ? children : 'Button'}</Button>{' '}
        </div>
    );
}
export default Btn;
Button.propTypes = {
    active: PropTypes.bool,
    'aria-label': PropTypes.string,
    block: PropTypes.bool,
    color: PropTypes.string, // default: 'secondary'
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
  
    // Pass in a Component to override default button element
    // example: react-router Link
    // default: 'button'
    tag: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
      PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
      ]))
    ]),
  
    // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  
    onClick: PropTypes.func,
    size: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
  
    // use close prop for BS4 close icon utility
    close: PropTypes.bool,
  }
  
  Button.defaultProps = {
    color: 'secondary',
    tag: 'button',
  }