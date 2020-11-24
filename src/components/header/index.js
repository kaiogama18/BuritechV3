import React from 'react';
import { Contact, Nav } from './styles'
import { Wrapper } from '../../styles/styles'
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image"
import { Container, Title } from '..';

const Contacts = props => (
  <Contact >
    <Wrapper>
      <p><span className="material-icons">call</span><b> Telefone:</b> (92) 99189-1906</p>
      <p><span className="material-icons">email</span><b>Email:</b> contato@buritech.com.br</p>
      <p><span className="material-icons">location_on</span><b>Endereço:</b> UFAM, Av.Octávio Hamilton Botelho Mourão</p>
      <p className="invisible-tablet-mobile">Acompanhe nossas redes sociais <span className="material-icons">facebook</span></p>
    </Wrapper>
  </Contact>
)

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

  const ListLink = props => (
    props.img === 'true' ? (
      <Title link normal url={props.to}> <Img fixed={data.file.childImageSharp.fixed} alt={props.children} /> </Title>
    )
      : (
        <Title link normal url={props.to} only={props.mobile === 'true' ? 'desktop' : null} >  {props.children} </Title>
      )
  )


  return (
    <navbar>
      <Contacts />
      <Container backgroundColor={'#525659'} color={'#fff'} >
        <Nav>
          {links.link.map((aux) => (
            <ListLink key={aux.title} mobile={aux.hidden} img={aux.img} to={aux.url}>{aux.title}</ListLink>
          ))}
        </Nav>

      </Container>
    </navbar>
  )
}



// const Contacts = props => (
//   <Contact >
//     <Wrapper>
//       <p><span className="material-icons">call</span><b> Telefone:</b> (92) 99189-1906</p>
//       <p><span className="material-icons">email</span><b>Email:</b> contato@buritech.com.br</p>
//       <p><span className="material-icons">location_on</span><b>Endereço:</b> UFAM, Av.Octávio Hamilton Botelho Mourão</p>
//       <p className="invisible-tablet-mobile">Acompanhe nossas redes sociais <span className="material-icons">facebook</span></p>
//     </Wrapper>
//   </Contact>
// )

// export default () => {

//   const data = useStaticQuery(graphql`
//     query photo {
//       file(relativePath: { eq: "logo_white.png" }) {
//         childImageSharp {
//           fixed(width: 104) {
//             ...GatsbyImageSharpFixed_tracedSVG
//           }
//         }
//       }
//     }
//   `)

// const ListLink = props => (
//   props.img === 'true' ? (
//     <Link to="/" > <Img fixed={data.file.childImageSharp.fixed} alt={props.children} /></Link>
//   )
//     : (
//       <Link to={props.to} className={props.mobile === 'true' ? 'hidden' : null} >{props.children}</Link>
//     )
// )

//   return (
//     <Navbar>
//       <Contacts />
//       <Wrapper>
//         <nav>
// {links.link.map((aux) => (
//   <ListLink key={aux.title} mobile={aux.hidden} img={aux.img} to="/">{aux.title}</ListLink>
// ))}
//         </nav>
//       </Wrapper>
//     </Navbar>
//   )
// }


const links = {
  link: [
    {
      title: 'Home',
      url: '/',
      hidden: 'true'
    },
    {
      title: 'Quem Somos',
      url: '/about',
      hidden: 'true'
    },
    {
      title: 'Buritech Logo',
      url: '/',
      img: 'true'
    },
    {
      title: 'Serviços',
      url: '/portfolio'
    },
    {
      title: 'Contato',
      url: '/contact'
    },
  ],

};
