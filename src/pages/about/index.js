import { Container, Content, Item, Title, Button } from "../../components"
import React from 'react';


export default () => {
    return (
        <>
        <Container vertical>
            <Item flex>
                <Title>  A BURITECH </Title>
                <Content>
                    Somos uma empresa regional especializada em
                    <b> desenvolvimento de software</b> e na realização de treinamentos
                    técnicos em linguagens de programação, engenharia de
                    softwares e áreas relacionadas.


                    A Buritech é uma empresa de base tecnológica, sediada na cidade
                    de Manaus, que oferece a seus clientes
                    e parceiros soluções em
                    projetos de software, consultoria e treinamentos voltados à
                    Ciência de Dados,
                    desenvolvimento e <b>aplicações Web e Mobile.</b>
                </Content>
            </Item>
        </Container>

        <Container vertical>
            <Item flex>
                <Title>  POR QUE MACHINE LEARNING? </Title>
                <Content>
                Machine Learning é a parte da inteligência artificial
que permite que sistemas aprendam automaticamente
a partir da experiência.  <br/>


Data Science é a ciência que estuda as informações,
seu processo de captura, transformação, geração e,
posteriormente, análise de dados.<br/>


Nossos projetos de web, como o desenvolvimento de
sites, aplicativos e chatbots, são esquematizados a
partir da inteligência do Machine Learning. <br/>
                </Content>

                <Button text="veja nossos projetos" link="/" />
            </Item>
        </Container>
        </>
    )
}


