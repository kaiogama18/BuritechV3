import React from 'react';
import styled from 'styled-components';
import { Button, Content, Title } from '..';


const Card = styled.div`
    flex: 1;
    border: 0;
    padding: 1%;
    text-align: center;
    background-color: #fff0;

    h5 {
        height: 3em;
        display: flex;
        font-weight: bold;
        align-items: center;
        justify-content: center;
    }

    .material-icons {
        margin: 3% 0;
        color: #e8b11c;
        font-size: 5em;
        font-family: 'Material Icons';
    }
`;

export default function ({ data }) {
    console.log(data)
    return (
        <Card>
            <Title normal>  {data.title} </Title>
            <span className="material-icons">{data.img}</span>
            <Content> {data.content} </Content>
            <Button text="Saiba Mais" link={data.url} />
        </Card>
    )
}






