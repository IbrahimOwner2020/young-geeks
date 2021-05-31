import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import Email from './../../../images/email.svg'
import Phone from './../../../images/phone.svg'

// STYLES
const StyledLink = styled(GatsbyLink)`
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    font-family: inherit;
    color: #fff;
    border-right: 2px solid #fff;
    padding: 2px 10px;

    :last-of-type {
        border-right: none;
    }
`;

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
`;

const An = styled.a`
    text-decoration: none;
    color: #fff;
    disply: flex;
    align-items: center;
`;

const Img = styled.img`
    width: 12px;
    height: 12px;
    margin-right: 5px;
`;

const Span = styled.span`
    font-size: 12px;
    font-weight: 500;
    font-family: inherit;
    color: #fff;
    margin-right: 15px;

    :last-of-type {
        margin-right: none;
    }
`;

// MARKUP
const TopNav = () => {
    return(
        <Nav>
            <div>
                <An href="malto:younggeeks@gmail.com">
                    <Img src={Email} alt="Email Icon" />
                    <Span>younggeeks@gmail.com</Span>
                </An>
                <An href="call:+255 764 649 881">
                    <Img src={Phone} alt="Phone Icon" />
                    <Span>+255 764 649 881</Span>
                </An>
            </div>
            <div>
                <StyledLink to="/career">Career</StyledLink>
                <StyledLink to="/ContactUs">Contact Us</StyledLink>
                <StyledLink to="/news">News</StyledLink>
            </div>
        </Nav>
    )
}

export default TopNav