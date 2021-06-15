import React from 'react'
import styled from 'styled-components'
import ServiceTypo from '../Typography/ServiceTypo'
import PortfolioDown from './PortfolioDown'

// DATA
const heading = {
    title: "What we Done",
    mainTitle: "Our Portfolio",
    text: "It is long established fact that a reader will be distracted by the readable content of a page wgen looking at its layout."
}

// STYLES
const Div = styled.div`
    max-width: 830px;
    margin: 0 auto;
    position: relative;
    height: 470px
`;

const Div2 = styled.div`
    background-color: #0085FF1A;
`;

// MARKUP
const Portfolio = () => {
    return(
        <Div2>
            <Div>
                <ServiceTypo data={heading}/>
                <PortfolioDown />
            </Div>
        </Div2>
    )
}

export default Portfolio