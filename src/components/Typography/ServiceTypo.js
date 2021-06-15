import React from 'react'
import styled from 'styled-components'

// STYLES
const Div = styled.div`
    margin: 0 auto 0 auto;
    padding: 60px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 600px) {
        padding: 60px 20px;
        align-items: flex-start;
    }
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
    margin: 10px 0;
`;

const SpanBottom = styled.span`
    color: rgba(4, 37, 101, 0.5);
    font-size: 16px;
    font-family: inherit;
    font-weight: 400;
    max-width: 500px;
    text-align: center;

    @media (max-width: 600px) {
        text-align: start;
    }
`;

// MARKUP
const ServiceTypo = ({ data }) => {
    return(
        <Div>
            <SpanTop>{data.title}</SpanTop>
            <H3>{data.mainTitle}</H3>
            <SpanBottom>{data.text}</SpanBottom>
        </Div>
    )
}

export default ServiceTypo