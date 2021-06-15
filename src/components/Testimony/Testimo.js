import React from 'react'
import styled from 'styled-components'
import sam from './../../images/Sam.jpg'
import left from '../../images/left.svg'
import right from '../../images/right.svg'

// STYLES
const Div = styled.div`
    background-color: #000;
    border-radius: 5px;
    position: relative;

    @media (max-width: 900px) {
        margin: 0 15px;
    }
`;

const Div2 = styled.div`
    max-width: 830px;
    margin: 5px auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 870px) {
        width: 80%;
    }
`;

const Div3 = styled.div`
    margin: 30px 0;
`;

const Img = styled.img`
    width: 110px;
    height: 110px;
    margin: 30px 0;
    border-radius: 50%;
`;

const Span = styled.span`
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    font-family: inherit;
    max-width: 700px;
    margin: 0 auto;
    text-align: center
`;

const H4 = styled.h4`
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    font-family: inherit;
    max-width: 700px;
    margin: 0;
    margin: 4px auto;
    text-align: center
`;

const Span2 = styled.span`
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    font-family: inherit;
    max-width: 700px;
    margin: 0 auto;
    text-align: center
`;

const ButtonLeft = styled.button`
    background-color: #0085FF;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    cursor: pointer;

    img {
        width: 10px;
        height: 10px;
    }

    @media (max-width: 900px) {
        transform: translate(50%, -50%);
    }
`;

const ButtonRight = styled.button`
    background-color: #0085FF;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    border-radius: 4px;
    cursor: pointer;

    img {
        width: 10px;
        height: 10px;
    }

    @media (max-width: 900px) {
        transform: translate(-50%, -50%);
    }
`;

// MARKUP
const Testimo = () => {
    return(
        <Div>
            <Div2>
                <Img src={sam} alt="sam" />
                <Span>“It is long established fact that a reader will be distracted by the readable content of a page wgen looking at its layout It is long established fact that a reader will be distracted by the readable.”</Span>
                <Div3>
                    <H4>Sam Jr</H4>
                    <Span2>Lang’ata bora</Span2>
                </Div3>
            </Div2>
            <ButtonLeft>
                <img src={left} alt="left icon" />
            </ButtonLeft>
            <ButtonRight>
                <img src={right} alt="right icon" />
            </ButtonRight>
        </Div>
    )
}

export default Testimo