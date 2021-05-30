import * as React from 'react'
import { Link } from 'gatsby'
import Email from './../../../images/email.svg'
import Phone from './../../../images/phone.svg'

// STYLES
const links = {
    color: 'inherit',
    textDecoration: 'none'
}

const colorMain = {
    color: '#c0c0c0',
}

const colorMinor = {
    color: '#00f'
}

// MARKUP
const TopNav = (props) => {
    let color;

    if (props.home) {
        color = colorMain
    } else {
        color = colorMinor
    }

    return(
        <div style={color}>
            <div>
                <a href="malto:younggeeks@gmail.com">
                    <img src={Email} alt="Email Icon" />
                    <span>younggeeks@gmail.com</span>
                </a>
                <a href="call:+255 764 649 881">
                    <img src={Phone} alt="Phone Icon" />
                    <span>+255 764 649 881</span>
                </a>
            </div>
            <div>
                <Link style={links} to="/career">Career</Link>
                <Link style={links} to="/ContactUs">Contact Us</Link>
                <Link style={links} to="/news">News</Link>
            </div>
        </div>
    )
}

export default TopNav