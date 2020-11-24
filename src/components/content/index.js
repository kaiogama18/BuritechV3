import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.div`
    margin: 3% 0;
    font-size: 1em;
    font-weight: normal;
    text-align: ${props => props.align}
    a { 
        font-weight: bold;
    }

    @media screen and (max-width: 600px) {
        text-align: justify;
        margin: 10% 1%;
    }
`;

const Contact = styled.p`
    align-items: center;
    justify-content: center;  
    display: ${props => props.flex ? 'flex' : null};
    font-size: ${props => props.small ? '12px' : null};  
    margin: ${props => props.small ? '1rem 1rem 1rem 0' : null}; 

    b {
        margin-right: 5px;
    }
    .material-icons {
        margin 0 3px;
        font-size: 20px;
        font-family: 'Material Icons';
    }
`;

export default function (props) {
    return (
        !props.icon ? <Paragraph>{props.children}</Paragraph> :
            !props.flex ?
                <Contact>
                    <span className="material-icons">{props.icon}</span><b> {props.title}</b>{props.children}
                </Contact>
                : !props.position ?
                    <Contact small margin flex> <span className="material-icons">{props.icon}</span><b> {props.title}</b>{props.children} </Contact> :
                    <Contact small margin flex>{props.children} <span className="material-icons">{props.icon}</span></Contact>
    )
}
