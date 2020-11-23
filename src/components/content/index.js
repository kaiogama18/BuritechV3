import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.div`
    margin: 1% 0;
    font-size: 1em;
    font-weight: normal;
    text-align: ${props => props.align}
    a { 
        font-weight: bold;
    }

    @media screen and (max-width: 600px) {
        margin: 0 3%;
        text-align: justify;
    }
`;

export default function ({children}) {
    return (
        <Paragraph>{children}</Paragraph>
    )
}
