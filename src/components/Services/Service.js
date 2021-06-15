import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

// STYLES
const Div = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
`;

const Img = styled.img`
    height: 40px;
    width: 40px;
    margin: 15px 0;
`;

const H4 = styled.h4`
    color: #042565;
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
`;

const Span = styled.span`
    color: rgba(4, 37, 101, 0.5);
    font-family: inherit;
    font-weight: 400;
    font-size: 13px;
    text-align: center;
`;

const StyledLink = styled(GatsbyLink)`
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    font-fanily: inherit;
    color: #0085FF;
    margin-top: 20px;
    border-bottom: 1.5px solid transparent;
    padding: 1px 0;
    transition: all .2s;

    :hover {
        color: #042565;
        border-bottom: 1.5px solid #042565;
    }
`;

// MARKUP
const Service = (props) => {
    const data = props.data

    return(
        <Div>   
            <Img src={data.image} alt={data.title} />
            <H4>{data.title}</H4>
            <Span>{data.description}</Span>
            <StyledLink to={data.link}>{data.linkText}</StyledLink>
        </Div>
    )
}

export default Service