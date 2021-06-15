import React from 'react'
import styled from 'styled-components'

// STYLES
const Div = styled.div`
    text-align: center;
`;

const H3 = styled.div`
    text-align: center;
    color: #042565;
    font-weight: 500;
    font-family: inherit;
    font-size: 22px;
    margin: 10px 0;
`;

const Span = styled.div`
    text-align: center;
    color: rgba(4, 37, 101, 0.5);
    font-weight: 400;
    font-family: inherit;
    font-size: 16px;
    width: 75%;
    margin: 0 auto;
`;

// MARKUP
const HighlightsTypo = () => {
    return(
        <Div>
            <H3>Key Highlights</H3>
            <Span>It is long established fact that a reader will be distracted by the readable content of a page wgen looking at its layout.</Span>
        </Div>
    )
}

export default HighlightsTypo