import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { Button, Banner } from '../components/index';
import { Container, Wrapper, Section, Title, Paragraph, Item } from '../styles/styles';
import { Carousel } from "react-bootstrap";

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

            <div className="onlyDesktop">
              {Services.map((service) => (
                <Item key={service.icon}>
                  <div className="cards " >
                    <h5>{service.title}</h5>
                    <span className="material-icons">{service.icon}</span>
                    {service.text}
                    <Button text="Saiba Mais" link={service.url} />
                  </div>
                </Item>
              ))}
            </div>


            <Carousel className="onlyMobile" indicators={false}>
              {Services.map((service) => (
                <Carousel.Item key={service.icon}>
                  <Item>
                    <div className="cards">
                      <h5>{service.title}</h5>
                      <span className="material-icons">{service.icon}</span>
                      {service.text}
                      <Button text="Saiba Mais" link={service.url} />
                    </div>
                  </Item>
                </Carousel.Item>
              ))}
            </Carousel>

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
