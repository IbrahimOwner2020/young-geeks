import React from 'react'
import styled from 'styled-components'
import rightArrow from '../../images/right-arrow.svg'
import { Link as GatsbyLink } from 'gatsby'

// STYLES
const Div = styled.div`
    width: 100%;

    img {
        width: 100%;
        height: auto;
    }
`;

const Span = styled.span`
    background-color: #0085FF;
    color: #fff;
    border-radius: 2px;
    padding: 8px 20px;
    align-self: center;
    transform: translateY(-50%);
`;

const Span2 = styled.span`
    margin-top: 5px;
    color: #042565;
    font-size: 16px;
    font-family: inherit;
    font-weight: 500;
`;

const Span3 = styled.span`
    color: rgba(4, 37, 101, 0.5);;
    font-size: 14px;
    font-family: inherit;
    font-weight: 400;
`;

const Div2 = styled.div`
    border: 2px solid rgba(0, 133, 255, 0.2);
    display: flex;
    flex-direction: column;
`;

const Div3 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15px 10px 15px;
    position: relative;
`;

const Img = styled.img`
    width: auto;
    height: 10px;
`;

const StyledLink = styled(GatsbyLink)`
    text-decoration: none;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(-50%, -50%);
`

// MARKUP
const Worker = ( {data} ) => {
    return(
        <Div>
            <img src={data.image} alt="worker" />
            <Div2>
                <Span>{data.date}</Span>
                <Div3>
                    <Span2>{data.job}</Span2>
                    <Span3>{data.company}</Span3>
                    <StyledLink to={data.link}>
                        <Img src={rightArrow} alt="right arrow" />
                    </StyledLink>
                </Div3>
            </Div2>
        </Div>
    )
}

export default Worker