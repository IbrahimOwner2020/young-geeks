import React from 'react'
import styled from 'styled-components'
import MarketingTypo from '../Typography/MarketingTypo';
import marketing from './../../images/business.jpg'

// STYLES
const Section = styled.section`
    max-width: 1000px;
    margin: 180px auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 90px;
    grid-auto-rows: auto;

    @media (max-width: 1032px) {
        margin: 180px 16px;
    }

    @media (max-width: 632px) {
        margin: 80px 16px;
    }

    @media (max-width: 450px) {
        grid-template-columns: 1fr;
    }
`;

const Img = styled.img`
    width: 100%;
    height: auto;
`

// MARKUP
const Marketing = () => {
    return(
        <Section>
            <MarketingTypo />
            <Img src={marketing} alt="marketing image" />
        </Section>
    )
}

export default Marketing