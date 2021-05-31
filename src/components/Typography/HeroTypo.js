import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

// STYLES
const StyledLink = styled(GatsbyLink)`
    text-decpration: none;
`

// MARKUP
const HeroTypo = () => {
    return(
        <div>
            <div>
                <h2>Professional Web Design Services</h2>
                <span>It is long established fact that a reader will be distracted by the readable content of a page wgen looking at its layout, The point of using Lorem Ipsum</span>
                <StyledLink to="/portfolio">Quick Inquiry</StyledLink>
            </div>
        </div>
    )
}

export default HeroTypo;