import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PhoneNav from './PhoneNav';

// STYLES
const Nav = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 7px;
    padding: 10px;
`;

const Li = styled.li` 
    text-decoration: none;
    margin-right: 35px;
    font-family: inherit;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #042565;
    transition: all .2s;

    :hover,
    :active {
        color: #0085FF;
    }
`;

const link = {
    textDecoration: 'none',
    color: 'currentColor'
}

const Ul = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
`

const H3 = styled.h3`
    font-size: 23px;
    margin: 0;
    font-weight: 500;
    font-family: inherit;
    color: #042565;
`

const Span = styled.span`
    font-weight: 700;
`

const Button = styled.button`
    cursor: pointer;
    font-size: 13px;
    color: #fff;
    font-weight: 500;
    font-family: inherit;
    background-color: #0085FF;
    border-radius: 3px;
    padding: 16px 20px;
    border: none;
    margin-left: 30px;

    :hover {
        background-color: #042565;
    }

    @media (max-width: 932px) {
        display: none;
        visibility: hidden;
    }
`;

const Div = styled.div`
    margin-left: auto;

    @media (max-width: 932px) {
        display: none;
        visibility: hidden;
    }
`;

const Div2 = styled.div`
    margin-left: auto;
    display: none;
    visibility: hidden;

    @media (max-width: 932px) {
        display: block;
        visibility: visible;
    }
`;

// MARKUP
const BottomNav = () => {
    return(
        <div>
            <Nav>
                <Link style={link} to="/">
                    <H3>Young<Span>Geeks</Span></H3>
                </Link>
                <Div>
                    <Ul>
                        <Li><Link style={link} activeStyle={{ color: "#0085ff" }} to="/">Home</Link></Li>
                        <Li><Link style={link} activeStyle={{ color: "#0085ff" }} to="/aboutUs">About</Link></Li>
                        <Li><Link style={link} activeStyle={{ color: "#0085ff" }} to="/services">Services</Link></Li>
                        <Li><Link style={link} activeStyle={{ color: "#0085ff" }} to="/portfolio">PortfoLio</Link></Li>
                        <Li><Link style={link} activeStyle={{ color: "#0085ff" }} to="/blog">Blog</Link></Li>
                        <Li><Link style={link} activeStyle={{ color: "#0085ff" }} to="/contactUs">Contact Us</Link></Li>
                    </Ul>
                </Div>
                <div><Button>Request a Quote</Button></div>
                <Div2><PhoneNav /></Div2>
            </Nav>
        </div>
    )
}

export default BottomNav