import React from 'react';
import Img from "gatsby-image";
import { Container } from '../components';
import Button from '../components/button/index';
import { graphql, useStaticQuery } from 'gatsby';

export default () => {

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "404.png" }) {
        base
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Img fluid={data.image.childImageSharp.fluid} />
        Não encontramos este endereço, mas você <br /> ainda pode navegar pelo nosso site?
      <Button text="ir para Home" link="/" />
    </Container>
  )
}

