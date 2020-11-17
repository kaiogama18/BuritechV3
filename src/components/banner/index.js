import React from 'react';
import Img from "gatsby-image";

export default ({fluid}) => {
//   const {image} = useStaticQuery(graphql`
//   query Banner {
//     image(filter:{relativePath: {regex: "/Header\\/.+\\\\.yml/"}}) {
//       childImageSharp {
//         fluid(maxWidth: 4000, quality: 100) {
//           ...GatsbyImageSharpFluid_tracedSVG
//           }
//         }
//       }
//     }
//   `)


//   return <Img fluid={image.file.childImageSharp.fluid} />


  // const data = useStaticQuery(graphql`
  // query Banner {
  //   file(relativePath: { eq: "team.jpg" }) {
  //     childImageSharp {
  //       fluid(maxWidth: 4000, quality: 100) {
  //         ...GatsbyImageSharpFluid_tracedSVG
  //         }
  //       }
  //     }
  //   }
  // `)

  return <Img fluid={fluid} />
}

