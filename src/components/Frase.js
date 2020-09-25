import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding:3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    margin: 10px auto;

        h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size:10rem;
            color: #000;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    h2 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    text-align: right;
    color:#666;
    margin-top: 2rem;
    }
`;

function Frase({frase}) {

    const {quote, author} = frase;

    return (
        <ContenedorFrase>
            <h1>{quote}</h1>
            <h2>- {author}</h2>
        </ContenedorFrase>
    );
}

export default Frase;