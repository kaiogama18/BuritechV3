import React from 'react';
import { Container } from './styles'

export default function (props) {
    return (
        <Container backgroundColor={props.backgroundColor ? props.backgroundColor : null}>
            <div className="wrapper">
                {props.children}
            </div>
        </Container>
    )
}
