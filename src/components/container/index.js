import React from 'react';
import { Container, Wrapper } from './styles'

export default function (props) {
    return (
        <Container
            show={props.only}
            color={props.color}
            padding={props.vertical}
            backgroundColor={props.backgroundColor}>
            <Wrapper>
                {props.children}
            </Wrapper>
        </Container>
    )
}
