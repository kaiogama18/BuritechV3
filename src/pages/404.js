import React from 'react';
import Img from "gatsby-image";
import { graphql, useStaticQuery } from 'gatsby';
import { Button, Container, Title, Item } from '../components/index';

export default () => {

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "404.webp" }) {
        base
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <Container vertical>
      <Item flex center>
      <Title>  Ué, cadê a página? </Title>
        <Img fluid={data.image.childImageSharp.fluid} alt="representação de uma pessoa triste" />
        <Title normal>  Não encontramos este endereço, mas você <br /> ainda pode navegar pelo nosso site? </Title>
        <Button text="ir para Home" link="/" />
      </Item>
    </Container>
  )
}

