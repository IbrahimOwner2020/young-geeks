import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

// STYLES
const StyledLink = styled(GatsbyLink)`
    text-decoration: none;
    background-color: #fff;
    padding: 10px 18px;
    font-size: 16px;
    font-weight: 500;
    font-family: inherit;
    color: #042565;
    border-radius: 4px;
    transition: all .2s;

    :hover {
        background-color: #042565;
        color: #fff;
    }
`;

const Div = styled.div`
    background-color: #0085FF;
    padding: 40px 0; 
`;

const Div2 = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1032px) {
        margin: 0 16px;
    }

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const Div3 = styled.div`
    width: 60%;

    @media (max-width: 600px) {
        width: 100%
    }
`;

const Div4 = styled.div`

    @media (max-width: 600px) {
        margin-top: 30px;
    }
`;

const H3 = styled.h3`
    font-size: 22px;
    font-weight: 500;
    color: #fff;
    font-family: inherit;
    margin: 10px 0;
`;

const Span = styled.span`
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    font-family: inherit;
`;

// MARKUP
const Talk = () => {
    return(
        <Div>
            <Div2>
                <Div3>
                    <H3>Let's talk!</H3>
                    <Span>It is long established fact that a reader will be distracted by the readable content of a page wgen looking at its layout. It is long established fact that a reader will be distracted by the readable content.</Span>
                </Div3>
                <Div4>
                    <StyledLink to="/">Get in Touch</StyledLink>
                </Div4>
            </Div2>
        </Div>
    )
}

export default Talk