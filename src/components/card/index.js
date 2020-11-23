import React from 'react';
import { Button, Title } from '..';
import { Card } from './styles'



export default function ({ data }) {
    console.log(data)
    return (
        <Card>
            <Title normal>  {data.title} </Title>
            <span className="material-icons">{data.img}</span>
            <div>
            {data.content}
            </div>
            <Button text="Saiba Mais" link={data.url} />
        </Card>
    )
}






