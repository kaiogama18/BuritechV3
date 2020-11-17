import React from "react";
import Img from "gatsby-image";
import { graphql } from 'gatsby';
import { Carousel } from "react-bootstrap";
import Button from '../components/button/index';
import { Container, Wrapper, Section, Title, Paragraph, Item } from '../styles/styles';
// import Banner from "../components/Banner";

export default ({ data }) => {
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 1440px)`,
    },
    {
      ...data.normalImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Img fluid={sources} alt={data.mobileImage.base.split(".")} />
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
              {/* <Banner fluid={data.file.childImageSharp.fluid} /> */}
            </Item>
          </Section>
        </Container>
      </Wrapper>

    </>
  )
}

export const query = graphql`
  query {
    mobileImage: file(relativePath: { eq: "banner/banner-mobile.jpg" }) {
      base
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    desktopImage: file(
      relativePath: { eq: "banner/banner-ultrawide.jpg" }
    ) {
      base
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    normalImage: file(relativePath: { eq: "banner/banner-widescreen.jpg" }) {
      base
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`