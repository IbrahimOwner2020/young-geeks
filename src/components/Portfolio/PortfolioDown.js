import React from 'react'
import styled from 'styled-components'
import mac from '../../images/mac.svg'
import PortfolioTypo from './../Typography/PortfolioDownTypo'

// STYLES
const Div = styled.div`
    display: flex;
    margin: 0 15px;
`;

const Img = styled.img`

    @media (max-width: 650px) {
        width: 200px;
        height: auto;
    }

    @media (max-width: 450px) {
        display: none;
        visibility: none;
    }
`;

// MARKUP
const PortfolioDown = () => {
    return(
        <Div>
            <Img src={mac} alt="mac" />
            <PortfolioTypo />
        </Div>
    )
}

export default PortfolioDown