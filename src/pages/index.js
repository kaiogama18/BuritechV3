import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { Carousel } from "react-bootstrap";
import { Button, Banner, Container, Title, Item, Card, Content } from '../components/index';


function About({ about, img }) {
  return (
    <Container>
      <Item flex>
        <Title>  {about.title} </Title>
        <Content> {about.content}  </Content>
        <Button text="Saiba Mais" link="/" />
      </Item>
      <Item flex>
        <Img fluid={img} />
      </Item>
    </Container>
  );
}

function Service({ services }) {
  return (
    <Container backgroundColor={'#edf3f9'} vertical>
      <Title>  {services.title} </Title>

      <Item only={'desktop'}>
        {services.cards.map((card) => (
          <Card data={card} />
        ))}
      </Item>

      <Item only={'mobile'}>
        <Carousel indicators={false}>
          {services.cards.map((card) => (
            <Carousel.Item key={card.icon}>
              <Card data={card} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Item>

    </Container>
  );
}

export default ({ data }) => {
  return (
    <>
      <Banner />
      <About about={Home.about} img={data.image.childImageSharp.fluid} />
      <Service services={Home.services} />
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

const Home = {
  about: {
    title: 'Quem Somos',
    content: 'Somos uma empresa regional especializada em <b>desenvolvimento de software</b> e na realização de treinamentos técnicos em linguagens de   programação, engenharia de softwares e áreas relacionadas.'
  },
  services: {
    title: 'Nossos Serviços',
    cards: [
      {
        img: 'devices',
        title: 'Sites e Aplicativos',
        content: 'Criamos sites e/ou aplicativos responsivos para o seu negócio digital.',
        url: '/'
      },
      {
        img: 'forum',
        title: 'Chatbots',
        content: 'Facilite seu trabalho com um assistente que automatizará seu trabalho.',
        url: '/'
      },
      {
        img: 'engineering',
        title: 'Ciência de Dados',
        content: 'Facilite seu trabalho contratando um cientista de dados.',
        url: '/'
      },
      {
        img: 'psychology',
        title: 'Treinamento em Machine Learning',
        content: 'Domine o aprendizado de máquina com Python e torne-se um cientista.',
        url: '/'
      },
    ]
  }

}
