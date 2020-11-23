import React from 'react';
import { Container, Wrapper } from './styles'

export default function (props) {
    return (
        <Container
            backgroundColor={props.backgroundColor}
            padding={props.vertical}>
            <Wrapper>
                {props.children}
            </Wrapper>
        </Container>
    )
}
