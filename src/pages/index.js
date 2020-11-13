import React from "react";
import Img from "gatsby-image";
import { Carousel } from "react-bootstrap";
import Button from '../components/button/index';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Wrapper, Section, Title, Paragraph, Item } from '../styles/styles';
import Banner from "../components/Banner";

export default () => {

  const data = useStaticQuery(graphql`
    query Carousels {
      file(relativePath: { eq: "banners.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Img fluid={data.file.childImageSharp.fluid} />
          <Carousel.Caption>
            <Button text="Descubra" link="/" />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



      <Wrapper>
        <Container>
          <Section>
            <Item>
              <Title> Quem Somos  </Title>
              <Paragraph>
                Somos uma empresa regional especializada em <a>desenvolvimento de
              software</a> e na realização de treinamentos técnicos em linguagens de
              programação, engenharia de softwares e áreas relacionadas.
            </Paragraph>
              <Button text="Saiba Mais" link="/" />
            </Item>
            <Item>
              <Banner/>
            </Item>
          </Section>
        </Container>
      </Wrapper>

    </>
  )
}


