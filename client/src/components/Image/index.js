import React from 'react';
const Image = (props) => {
    const {src, height, width, imageAlt} = props;
    return (
        <img src={src} height={height} width={width} alt={imageAlt} />
    )
}
export default Image;

