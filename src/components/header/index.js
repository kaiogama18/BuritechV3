import React from 'react';
import { Navbar, Contact } from './styles'
import { Wrapper } from '../../styles/styles'
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image"

export default () => {

  const data = useStaticQuery(graphql`
    query photo {
      file(relativePath: { eq: "logo_white.png" }) {
        childImageSharp {
          fixed(width: 104) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return <header>
    <Contact>
      <Wrapper>
        <p><span className="material-icons">call</span><b> Telefone:</b> (92) 99189-1906</p>
        <p><span className="material-icons">email</span><b>Email:</b> contato@buritech.com.br</p>
        <p><span class="material-icons">location_on</span><b>Endereço:</b> UFAM, Av.Octávio Hamilton Botelho Mourão</p>
        <p className="invisible-tablet-mobile">Acompanhe nossas redes sociais <span class="material-icons">facebook</span></p>
      </Wrapper>
    </Contact>
    <Navbar>
      <Wrapper>
        <nav>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">Quem Somos</Link>
          <Link to="/"><Img fixed={data.file.childImageSharp.fixed} /></Link>
          <Link to="/portfolio">Serviços</Link>
          <Link to="/contact">Contato</Link>
        </nav>
      </Wrapper>
    </Navbar>
  </header>
}

