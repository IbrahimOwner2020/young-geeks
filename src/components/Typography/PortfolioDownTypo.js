import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import right from './../../images/right.svg'
import left from './../../images/left.svg'

// STYLES
const StyledLink = styled(GatsbyLink)`
    text-decoration: none;
    color: #0085FF;
    font-weight: 500;
    font-size: 18px;
    font-family: inherit;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px 0;
`;

const Div3 = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 650px) {
        margin-top: 20px;
    }
`;

const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const H3 = styled.h3`
    color: #042565;
    font-weight: 500;
    font-family: inherit;
    font-size: 22px;
    margin: 0;
    margin-bottom: 10px;
`;

const Span = styled.span`
    color: rgba(4, 37, 101, 0.5);
    font-weight: 400;
    font-family: inherit;
    font-size: 16px;
    margin-bottom: 20px;
`;

const Button = styled.button`
    background-color: rgba(0, 133, 255, 0.15);
    border-radius: 4px;
    padding: 10px;
    color: rgba(4, 37, 101, 0.5);
    font-weight: 400;
    font-family: inherit;
    font-size: 16px;
    margin-bottom: 20px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    :last-of-type {
        margin-right: 0;
    }

    img {
        width: 10px;
        height: 10px;
    }
`;

// MARKUP
const PortfolioTypo = () => {
    return(
        <Div>
            <Div2>
                <H3>Angel Smile, best private details in Dar es Salaam</H3>
                <Span>It is long established fact that a reader will be distracted by the readable content of a page wgen looking at its layout. </Span>
                <StyledLink to="/">View Project</StyledLink>
            </Div2>
            <Div3>
                <Button>
                    <img src={left} alt="left arrow" />
                </Button>
                <Button>
                    <img src={right} alt="right arrow" />
                </Button>
            </Div3>
        </Div>
    )
}

export default PortfolioTypo