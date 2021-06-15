import React from 'react'
import styled from 'styled-components'

// STYLES

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border-right: 1.5px solid rgba(4, 37, 101, 0.2);

    :last-of-type {
        border-right: none;
    }

    @media (max-width: 800px) {
        border-right: none;
    }
`;

const Img = styled.img`
    height: 40px;
    width: 40px;
`;

const H4 = styled.h4`
    font-weight: 700;
    font-family: inherit;
    font-size: 22px;
    color: #0085FF;
    margin: 4px 0;
`;

const Span = styled.span`
    font-weight: 400;
    font-family: inherit;
    font-size: 14px;
    color: rgba(4, 37, 101, 0.5);
`;

// MARKUP
const Highlight = (props) => {
    const data = props.data

    return(
        <Div>   
            <Img src={data.image} alt={data.number} />
            <H4>{data.number}</H4>
            <Span>{data.word}</Span>
        </Div>
    )
}

export default Highlight