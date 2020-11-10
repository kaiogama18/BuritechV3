import React from 'react';
import { Navbar, Contact } from './styles'
import { Wrapper } from '../../styles/styles'
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image"

export default () => {
  
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 104) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <header>
    <Contact>
      <Wrapper>
        <p>Telefone: (92) 99189-1906</p>
        <p>Email: contato@buritech.com.br</p>
        <p>Endereço: UFAM, Av.Octávio Hamilton Botelho Mourão - Coroado, Manaus - AM</p>
        <p>Acompanhe nossas redes sociais</p>
      </Wrapper>
    </Contact>
    <Navbar>
      <Wrapper>
        <nav>
          <Link className="link" className="link" to="/">Home</Link>
          <Link className="link"  to="/about">Quem Somos</Link>
          <Link to="/"><Img fixed={data.file.childImageSharp.fixed} /></Link>
          <Link to="/portfolio">Serviços</Link>
          <Link to="/contact">Contato</Link>
        </nav>
        
      </Wrapper>

    </Navbar>

  </header>
}

