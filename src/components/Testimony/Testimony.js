import React from 'react'
import styled from 'styled-components'
import TestimonyTypo from '../Typography/TestimonyTypo'
import Testimo from './Testimo'

// DATA
const heading = {
    top: "What Our Customers Says",
    title: "Our Testimonials"
}

// STYLES
const Div = styled.div`
    max-width: 850px;
    margin: 150px auto 0 auto;
`;

// MARKUP
const Testimony = () => {
    return(
        <Div>
            <TestimonyTypo data={heading} />
            <Testimo />
        </Div>
    )
}

export default Testimony;