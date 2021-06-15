import React from 'react'
import styled from 'styled-components'
import Highlight from './Highlight'
import HighlightsTypo from '../Typography/HightlightsTypo'
import calender from './../../images/calender.svg'
import dunia from './../../images/dunia.svg'
import people from './../../images/people.svg'
import projects from './../../images/projects.svg'
import map from './../../images/map.svg'

// DATA
const data = [
    {
        image: `${calender}`,
        number: "30+",
        word: "Years"
    },
    {
        image: `${dunia}`,
        number: "35+",
        word: "Countries"
    },
    {
        image: `${people}`,
        number: "45+",
        word: "Enterprise Clients"
    },
    {
        image: `${projects}`,
        number: "1500+",
        word: "projects"
    },
    {
        image: `${map}`,
        number: "96%",
        word: "Clients Referation"
    }
]

// STYLES
const Div = styled.div`
    background-color: rgba(0, 133, 255, 0.1);
    padding: 50px 0;
`;

const Divi = styled.div`
    padding: 50px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: auto;
    grid-row-gap: 20px;
`;

const Span = styled.div`
    max-width: 750px;
    margin: 0 auto;

    @media (max-width: 800px) {
        margin: 0 15px 0 15px;
    }
`;

// MARKUP
const Highlights = () => {
    return(
        <Div>
            <Span>
                <HighlightsTypo />
                <Divi>
                    {data.map( data => (
                        <Highlight data={data} />
                    ))}
                </Divi>
            </Span>
        </Div>
    )
}

export default Highlights