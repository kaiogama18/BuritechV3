import React from "react"
import Img from "gatsby-image"
import { Carousel } from "react-bootstrap"
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from './styles'

export default () => {

  const data = useStaticQuery(graphql`
    query Carousels {
      file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          fixed(width: 1000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)



  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Img fixed={data.file.childImageSharp.fixed} />
        </Carousel.Item>
      </Carousel>
      <Container>
        <h2>
          Quem Somos
        </h2>

        <p>Somos uma empresa regional especializada em desenvolvimento de software</p>

      </Container>

    </>
  )
}


