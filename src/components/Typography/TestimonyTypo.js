import React from 'react'
import styled from 'styled-components'

// STYLES
const Div = styled.div`
    text-align: center;
`;

const Span = styled.span`
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    color: #0085FF;
    margin-bottom: 4px;
`;

const H3 = styled.h3`
    font-family: inherit;
    font-size: 23px;
    font-weight: 500;
    color: #042565;
    margin: 0;
    margin-bottom: 40px;
`;

// MARKUP 
const TestimonyTypo = ( {data} ) => {
    return(
        <Div>
            <Span>{data.top}</Span>
            <H3>{data.title}</H3>
        </Div>
    )
}

export default TestimonyTypo