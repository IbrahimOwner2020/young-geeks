import React from 'react'
import styled from 'styled-components'
import Foot from './Foot';

// DATA
const data = [
    {
        title: "Services",
        links: [
            {
                title: "About us",
                link: "/aboutUs"
            },
            {
                title: "Contact us",
                link: "/"
            },
            {
                title: "Careers",
                link: "/"
            },
            {
                title: "Support",
                link: "/"
            }
        ]
    },
    {
        title: "About",
        links: [
            {
                title: "FAQ's",
                link: "/"
            },
            {
                title: "Terms",
                link: "/"
            },
            {
                title: "Privacy",
                link: "/"
            },
            {
                title: "Blog",
                link: "/"
            }
        ]
    },
    {
        title: "Contact",
        links: [
            {
                title: "Phone : +255 787 118 486",
                link: "/"
            },
            {
                title: "Email : mzabayuni@gmail.com",
                link: "/"
            },
            {
                title: "address : Arusha, Tanzania",
                link: "/"
            }
        ]
    }
]

// STYLES
const Div = styled.div`
    background-color: #000;
    padding: 80px 0;
    color: #fff;
`;

const Div2 = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
    grid-auto-rows: auto;
    grid-column-gap: 10px;
    grid-row-gap: 50px;

    @media (max-width: 1032px) {
        margin: 0 16px;
    }

    @media (max-width: 472px) {
        grid-template-columns: 1fr;
    }
`;

const Div3 = styled.div`
    max-width: 380px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Div4 = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 500px) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 30px;
    }
`;

const H3 = styled.h3`
    font-family: inherit;
    font-weight: 700;
    font-size: 25px;
    margin: 0;
    margin-bottom: 20px;
`;

const Span = styled.span`
    font-family: inherit;
    font-weight: 400;
    font-size: 15px;
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: auto;
`;

const Span2 = styled.span`
    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
`;

// MARKUP
const Footer = () => {
    return(
        <Div>
            <Div2>
                <Div3>
                    <H3>YoungGeeks</H3>
                    <Span>It is long established fact that a reader will be distracted by the readable content of a page wgen looking at its layout.</Span>
                    <Span2>All Rights Reserved Mzabayuni and kidibra 2021.</Span2>
                </Div3>
                <Div4>
                    {data.map( data => (
                        <Foot data={data}/>
                    ))}
                </Div4>
            </Div2>
        </Div>
    )
}

export default Footer