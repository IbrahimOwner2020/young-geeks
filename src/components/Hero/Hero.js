import React from 'react'
import styled from 'styled-components'
import back from './../../images/code 1.jpg'

// STYLES
const Div = styled.div`
    background-image: linear-gradient(rgba(0, 133, 255, 0.88), rgba(0, 133, 255, 0.88)), url('${back}');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: auto;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

    @media (max-width: 550px) {
        padding-top: 40px;
    }
`;

// MARKUP
const Hero = (props) => {
    return(
        <Div>
            {props.children}
        </Div>
    ) 
}

export default Hero