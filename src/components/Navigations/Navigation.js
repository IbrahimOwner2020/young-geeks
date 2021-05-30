import * as React from "react"
import BottomNav from "./NavComps/BottomNav"
import TopNav from "./NavComps/TopNav"

// STYLES
const nav = {
    maxWidth: '1100px',
    margin: '0 auto'
}

// MARKUPS
const Navigation = (props) => {
    if (props.home) {
        return (
            <nav style={nav}>
                <TopNav home />
                <BottomNav />
            </nav>
        )
    } else {
        return (
            <nav style={nav}>
                <TopNav />
                <BottomNav />
            </nav>
        )
    }
}

export default Navigation