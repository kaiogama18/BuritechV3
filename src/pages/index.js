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
              <Img fluid={data.image.childImageSharp.fluid} />
            </Item>
          </Section>

          <Container>
            <Section>
              <Title> Nossos Serviços  </Title>
            </Section>
          </Container>

        </Container>
      </Wrapper>
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