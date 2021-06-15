import React from 'react'
import ServiceTypo from '../Typography/ServiceTypo'
import styled from 'styled-components'
import phone from './../../images/mobile.svg'
import tv from './../../images/tv.svg'
import code from './../../images/code.svg'
import world from './../../images/world.svg'
import html from './../../images/html.svg'
import search from './../../images/search.svg'
import Service from './Service'

// DATA
const data = [
    {
        title: "Mobile App Development",
        image: `${phone}`,
        link: "/",
        linkText: "Read More",
        description: "It is long established fact that a reader will be distracted by the readable content"
    },
    {
        title: "Web App Development",
        image: `${tv}`,
        link: "/",
        linkText: "Read More",
        description: "It is long established fact that a reader will be distracted by the readable content"
    },
    {
        title: "Web Design",
        image: `${code}`,
        link: "/",
        linkText: "Read More",
        description: "It is long established fact that a reader will be distracted by the readable content"
    },
    {
        title: "Digital Marketing Services",
        image: `${world}`,
        link: "/",
        linkText: "Read More",
        description: "It is long established fact that a reader will be distracted by the readable content"
    },
    {
        title: "Web Hosting Services",
        image: `${html}`,
        link: "/",
        linkText: "Read More",
        description: "It is long established fact that a reader will be distracted by the readable content"
    },
    {
        title: "Search Engine Optimization",
        image: `${search}`,
        link: "/",
        linkText: "Read More",
        description: "It is long established fact that a reader will be distracted by the readable content"
    }
]

const heading = {
    title: "Focused on Growing Brands Online",
    mainTitle: "We Are A Creative Digital Marketing Agency",
    text: "It is long established fact that a reader will be distracted by the readable content of a page wgen looking at its layout."
}

// STYLES
const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
    grid-auto-rows: auto;
    max-width: 750px;
    margin: 10px auto 100px auto;

    @media (max-width: 800px) {
        margin: 10px 15px 100px 15px;
    }
`;

// MARKUP
const Services = () => {
    return(
        <section>
            <ServiceTypo data={heading} />
            <Div>
                {data.map( data => (
                    <Service data={data} />
                ))}
            </Div>
        </section>
    )
}

export default Services