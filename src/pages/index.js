import React from "react";
import { Button, Banner } from '../components/index';
import { Container, Wrapper, Section, Title, Paragraph, Item } from '../styles/styles';

export default () => {
  return (
    <>
      <Banner />
      <Wrapper>
        <Container>
          <Section>
            <Item>
              <Title> Quem Somos  </Title>
              <Paragraph> Somos uma empresa regional especializada em <b>desenvolvimento de
              software</b> e na realização de treinamentos técnicos em linguagens de
              programação, engenharia de softwares e áreas relacionadas.
            </Paragraph>
              <Button text="Saiba Mais" link="/" />
            </Item>
            <Item>
            </Item>
          </Section>
        </Container>
      </Wrapper>
    </>
  )
}


