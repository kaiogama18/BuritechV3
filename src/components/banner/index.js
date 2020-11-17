import React from 'react';
import { Button } from '..';
import Img from "gatsby-image";
import { Carousel } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';

export default () => {

  const data = useStaticQuery(graphql`
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
    <Carousel>
      <Carousel.Item>
        <Img fluid={sources} alt={data.mobileImage.base.split(".")} />
        <Carousel.Caption>
          <Button text="Descubra" link="/" />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

