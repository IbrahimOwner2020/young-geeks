import React from 'react'
import back from './../../images/code 1.jpg'

// STYLES
const hero = {
    backgroundImage: `linear-gradient(rgba(0, 133, 255, 0.88), rgba(0, 133, 255, 0.88)), url('${back}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: 'auto'
}

// MARKUP
const Hero = (props) => {
    return(
        <div style={hero}>
            {props.children}
        </div>
    )
}

export default Hero