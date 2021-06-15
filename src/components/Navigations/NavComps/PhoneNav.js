import React from 'react'
import styled from 'styled-components'

// STYLES
const Button = styled.button`
    background: none;
    border: none;

    div {
        height: 4px;
        border-radius: 2px;
        width: 30px;
        background-color: #042565;
        margin-top: 5px;
    }
`

//  MARKUP
const PhoneNav = () => {    
    return(
        <div>
            <Button>
                <div></div>
                <div></div>
                <div></div>
            </Button>
        </div>
    )
}

export default PhoneNav