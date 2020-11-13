import React from 'react';
import Img from "gatsby-image";
import { graphql, useStaticQuery } from 'gatsby';

export default () => {

  const data = useStaticQuery(graphql`
  query Banner {
    file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`)

  return <Img fluid={data.file.childImageSharp.fluid} />
}

