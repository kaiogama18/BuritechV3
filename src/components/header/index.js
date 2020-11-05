import React from 'react';
import { Navbar, Contact } from './styles'
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
  return <header>
    <Contact>
      <div>
        <p>Telefone: (92)99189-1906</p>
        <p>Email: contato@buritech.com.br</p>
        <p>Endereço: UFAM, Av.Octávio Hamilton Botelho Mourão - Coroado, Manaus - AM</p>
      </div>
      <div>
        <p>Acompanhe nossas redes sociais</p>
      </div>
    </Contact>
    <Navbar>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Quem Somos</Link>
        {/* <li><Img fixed={data.file.childImageSharp.fixed} /></li> */}
        <Link to="/portfolio">Serviços</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </Navbar>

  </header>
}

