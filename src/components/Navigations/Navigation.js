import React from "react"
import styled from 'styled-components'
import BottomNav from "./NavComps/BottomNav"
import TopNav from "./NavComps/TopNav"

// STYLES
const Nav = styled.nav`
    max-width: 1100px;
    margin: 0 auto;

    @media (max-width: 1132px) {
        margin: 0 16px;
    }
`

// MARKUPS
const Navigation = (props) => {
    if (props.home) {
        return (
            <Nav>
                <TopNav />
                <BottomNav />
            </Nav>
        )
    } else {
        return (
            <Nav>
                <BottomNav />
            </Nav>
        )
    }
}

export default Navigation