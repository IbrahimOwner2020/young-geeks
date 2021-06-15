import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components';

// STYLES
const StyledLink = styled(GatsbyLink)`
    text-decoration: none;
    color: rgba(255, 255, 255, 0.6);
    transition: all .2s;

    :hover {
        color: #fff;
    }
`;

const H3 = styled.h3`
    font-family: inherit;
    font-weight: 500;
    color: #fff;
    font-size: 20px;
    margin: 0;
    margin-bottom: 20px;

    @media (max-width: 500px) {
        margin-bottom: 10px;
    }
`;

const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        margin-bottom: 10px;

        :last-of-type {
            margin-bottom: 0;
        }
    }
`;

// MARKUP
const Foot = ( {data} ) => {
    const links = data.links;

    return(
        <div>
            <H3>{data.title}</H3>
            <Ul>
                {links.map( link => (
                    <li>
                        <StyledLink to={link.link}>{link.title}</StyledLink>
                    </li>
                ))}
            </Ul>
        </div>
    )
}

export default Foot