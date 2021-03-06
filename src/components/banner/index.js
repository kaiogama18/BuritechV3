import React from 'react';
import { Button } from '..';
import Img from "gatsby-image";
import { Carousel } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';

export default () => {

  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "banner/banner-mobile.webp" }) {
        base
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      desktopImage: file(
        relativePath: { eq: "banner/banner-ultrawide.webp" }
      ) {
        base
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      normalImage: file(relativePath: { eq: "banner/banner-widescreen.webp" }) {
        base
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

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
    <Carousel indicators={false}>
      <Carousel.Item>
        <Img fluid={sources} alt="O que é a buritech?" />
        <Carousel.Caption>
          <Button text="Descubra" link="/about" />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

