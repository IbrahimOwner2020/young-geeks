import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import TestimonyTypo from '../Typography/TestimonyTypo'
import Worker from './Worker'
import sam from '../../images/Sam.jpg'
import tana from '../../images/tana.jpg'
import ibra from '../../images/ibra.jpg'

// DATA
const heading = {
    top: "Read Latest News",
    title: "Blogs"
}

const data = [
    {
        image: `${tana}`,
        link: "/",
        date: "30 Jan 2018",
        job: "Android Developer",
        company: "Younggeeks Inc, Tz"
    },
    {
        image: `${sam}`,
        link: "/",
        date: "23 Jan 2017",
        job: "Software Engineer",
        company: "Cloudflare, USA"
    },
    {
        image: `${ibra}`,
        link: "/",
        date: "12 Mar 2020",
        job: "Theme Developer",
        company: "Younggeeks Inc, Tz"
    }
]

// STYLES
const Div = styled.div`
    max-width: 850px;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
`;

const Div2 = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 50px;
    margin-bottom: 55px;

    @media (max-width: 900px) {
        margin: 0 15px;
        margin-bottom: 50px;
    }
`;

const StyledLink = styled(GatsbyLink)`
    align-self: center;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-family: inherit;
    font-size: 15px;
    background-color: #0085FF;
    border-radius: 4px;
    padding: 10px 22px;
`

// MARKUP
const Testimony = () => {
    return(
        <Div>
            <TestimonyTypo data={heading} />
            <Div2>
                {data.map( data => (
                    <Worker data={data} />
                ))}
            </Div2>
            <StyledLink to="/">View All Blogs</StyledLink>
        </Div>
    )
}

export default Testimony;