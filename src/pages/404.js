import React from 'react';
import Img from "gatsby-image";
import Button from '../components/button/index';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, NotFound } from '../styles/styles';

export default () => {

  const data = useStaticQuery(graphql`
    query notFound {
      file(relativePath: { eq: "404.png" }) {
        childImageSharp {
          fixed(width: 700) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <NotFound>
    <Img fixed={data.file.childImageSharp.fixed} />
    <Container>
      <h2>Não encontramos este endereço, mas você <br /> ainda pode navegar pelo nosso site?  </h2>
      <Button text="ir para Home" link="/" />
    </Container>
  </NotFound>
}

