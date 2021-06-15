import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

// STYLES
const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const SpanTop = styled.span`
    color: #0085FF;
    font-size: 18px;
    font-family: inherit;
    font-weight: 500;
`;

const H3 = styled.span`
    color: #042565;
    font-size: 25px;
    font-family: inherit;
    font-weight: 500;
    margin: 6px 0;
`;

const SpanBottom = styled.span`
    color: rgba(4, 37, 101, 0.5);
    font-size: 16px;
    font-family: inherit;
    font-weight: 400;
    max-width: 500px;
    text-align: left;
`;

const StyledLink = styled(GatsbyLink)`
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    font-family: inherit;
    padding: 10px 25px;
    background-color: #0085FF;
    border-radius: 4px;
    margin-top: 30px;
    transition: all .2s;

    :hover { 
        background-color: #032565;
    }
`;

// MARKUP
const MarketingTypo = () => {
    return(
        <Div>
            <SpanTop>Focused on Growing Brands Online</SpanTop>
            <H3>Best Online Marketing Agency In Tanzania</H3>
            <SpanBottom>It is long established fact that a reader will be distracted by the readable content of a page wgen looking at its layout. It is long established fact that a reader will be distracted by the readable content,It is long established fact that a reader will be distracted by the readable content.</SpanBottom>
            <StyledLink to="/">Read More</StyledLink>
        </Div>
    )
}

export default MarketingTypo