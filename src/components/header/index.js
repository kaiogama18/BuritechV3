import React from 'react';
import { Navbar } from './styles'
// import { Link, graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
// import Img from "gatsby-image"

export default function Header() {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     file(relativePath: { eq: "logo.png" }) {
  //       childImageSharp {
  //         fixed(width: 184) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `)
  return <Navbar>
    <header>
      <nav>
        <ul>
          <li><Link to="/">Teams</Link></li>
          <li><Link to="/">News</Link></li>
        </ul>
        {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
        <ul>
          <li><Link to="/">Company</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  </Navbar>
}

