import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { Button, Banner } from '../components/index';
import { Container, Wrapper, Section, Title, Paragraph, Item } from '../styles/styles';

export default ({ data }) => {
  return (
    <>
      <Banner />
      <Wrapper>
        <Section>
          <Item>
            <Section>
              <Title> <b>..</b>Quem Somos </Title>
            </Section>
            <Paragraph> Somos uma empresa regional especializada em <b>desenvolvimento de
              software</b> e na realização de treinamentos técnicos em linguagens de
              programação, engenharia de softwares e áreas relacionadas.
            </Paragraph>
            <Button text="Saiba Mais" link="/" />
          </Item>
          <Item>
            <Img fluid={data.image.childImageSharp.fluid} />
          </Item>
        </Section>
      </Wrapper>

      <Container>
        <Wrapper>
          <Section>
            <Title> <b>..</b>Nossos Serviços </Title>
          </Section>
          <Section>
            {Services.map((service) => (
              <Item>
                <div className="cards">
                  <h5>{service.title}</h5>
                  <span class="material-icons">{service.icon}</span>
                  <Paragraph> {service.text} </Paragraph>
                  <Button text="Saiba Mais" link={service.url} />
                </div>
              </Item>
            ))}
          </Section>
        </Wrapper>
      </Container>

    </>
  )
}


export const query = graphql`
  query {
    image: file(relativePath: { eq: "team.jpg" }) {
      base
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

const Services = [
  {
    icon: 'devices',
    title: 'Sites e Aplicativos',
    text: 'Criamos sites e/ou aplicativos responsivos para o seu negócio digital.',
    url: '/'
  },
  {
    icon: 'forum',
    title: 'Chatbots',
    text: 'Facilite seu trabalho com um assistente que automatizará seu trabalho.',
    url: '/'
  },
  {
    icon: 'engineering',
    title: 'Ciência de Dados',
    text: 'Facilite seu trabalho contratando um cientista de dados.',
    url: '/'
  },
  {
    icon: 'psychology',
    title: 'Treinamento em Machine Learning',
    text: 'Domine o aprendizado de máquina com Python e torne-se um cientista de dados.',
    url: '/'
  },
];
