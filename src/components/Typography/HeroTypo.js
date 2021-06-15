import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

// DATA
const data = [
    {
        title: "Professional Web Design Services",
        id: "4568",
        link: "/",
        linkText: "Quick Inquiry",
        description: "It is long established fact that a reader will be distracted by the readable content of a page wgen looking at its layout, The point of using Lorem Ipsum"
    },
    {
        title: "Professional Web Design Services",
        id: "4748",
        link: "/",
        linkText: "Quick Inquiry",
        description: "It is long established fact that a reader will be distracted by the readable content of a page wgen looking at its layout, The point of using Lorem Ipsum"
    },
    {
        title: "Professional Web Design Services",
        id: "4128",
        link: "/",
        linkText: "Quick Inquiry",
        description: "It is long established fact that a reader will be distracted by the readable content of a page wgen looking at its layout, The point of using Lorem Ipsum"
    }
]

// STYLES
const StyledLink = styled(GatsbyLink)`
    text-decoration: none;
    background-color: #fff;
    border-radius: 3px;
    padding: 10px 20px;
    font-size: 16px;
    color: #042565;
    font-weight: 500;
    font-family: inherit;
    transition: all .2s;

    :hover {
        color: #fff;
        background-color: #042565;
    }
`;

const Nav = styled.nav`
    width: 100%;
    height: auto;
    overflow: hidden;
    padding: 100px 0 180px 0;
`;

const DivList = styled.div` 
    display: flex;
    margin-left: 0;
    align-item: center;
    width: 300%;
    height: auto;
    transition: all .3s;
`;

const DivItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 720px) {
        align-items: flex-start;
        margin: 0 15px;
    }
`;

const H2 = styled.h2`
    font-size: 40px;
    letter-spacing: 0.05em;
    color: #fff;
    font-weight: 400;
    font-family: inherit;
    margin-bottom: 20px;
`;

const Span = styled.span`
    font-size: 16px;
    line-height: 25px;
    color: #fff;
    font-weight: 400;
    font-family: inherit;
    margin-bottom: 50px;
    max-width: 45%;
    text-align: center; 

    @media (max-width: 850px) {
        max-width: 80%;
    }

    @media (max-width: 720px) {
        text-align: start;
    }
`;

// MARKUP
const DataReturn = (props) => {
    return(
        <DivItem id={props.id}>
            <H2>{props.title}</H2>
            <Span>{props.description}</Span>
            <StyledLink to="/portfolio">{props.link}</StyledLink>
        </DivItem>
    )
}

const HeroTypo = () => {
    return(
        <Nav>
            <DivList>
                {data.map( data => (
                    <DataReturn 
                        title={data.title} 
                        id={data.id} 
                        link={data.linkText} 
                        description={data.description} 
                    />
                ))}
            </DivList>
        </Nav>
    )                                                                                                                                                                                                                                                                                       
}

export default HeroTypo;