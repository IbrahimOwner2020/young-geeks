import * as React from 'react'
import { Link } from 'gatsby'

// STYLES
const nav = {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '7px',
    padding: '5px 8px'
}

const link = {
    textDecoration: 'none',
    margin: '10px',
    fontFamily: 'inherit',
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '22px',
    color: '#042565'
}

const list = {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: '0'
}

const title = {
    fontSize: '20px',
    margin: '0',
    fontWeight:'500',
    fontFamily: 'inherit',
    color: '#042565'
}

const title2 = {
    fontWeight: '700'
}

// MARKUP
const BottomNav = () => {
    return(
        <div>
            <div style={nav}>
                <Link style={link} to="/"><h3 style={title}>Young<span style={title2}>Geeks</span></h3></Link>
                <div>
                    <ul style={list}>
                        <li><Link style={link} to="/">Home</Link></li>
                        <li><Link style={link} to="/aboutUs">About</Link></li>
                        <li><Link style={link} to="/services">Services</Link></li>
                        <li><Link style={link} to="/portfolio">Portfolio</Link></li>
                        <li><Link style={link} to="/blog">Blog</Link></li>
                        <li><Link style={link} to="/contactUs">Contact Us</Link></li>
                    </ul>
                </div>
                <div><button>Request a Quote</button></div>
            </div>
        </div>
    )
}

export default BottomNav