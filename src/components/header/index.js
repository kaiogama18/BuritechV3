import React from 'react';
import Img from "gatsby-image"
import { Container, Content, Title } from '..';
import { graphql, useStaticQuery } from 'gatsby';


function Contacts() {
  return (
    <Container backgroundColor={'#1a1a1a'} color={'#fff'} only={'desktop'} >
      {navbar.contacts.map((contact) =>
        <Content key={contact.title} icon={contact.icon} title={contact.title} position={contact.position} flex> {contact.description} </Content>
      )}
    </Container>
  );
}

export default () => {

  const data = useStaticQuery(graphql`
    query photo {
      file(relativePath: { eq: "logo_white.webp" }) {
        childImageSharp {
          fixed(width: 104) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  const ListLink = props => (
    props.img === 'true' ? <Title link normal url={props.to}> <Img fixed={data.file.childImageSharp.fixed} alt={props.children} /> </Title>
      : <Title link normal url={props.to} only={props.mobile === 'true' ? 'desktop' : null} >  {props.children} </Title>
  )

  return (
    <navbar>
      <Contacts />
      <Container backgroundColor={'#525659'} color={'#fff'} >
        <nav> {navbar.link.map((aux) => <ListLink key={aux.title} mobile={aux.hidden} img={aux.img} to={aux.url}>{aux.title}</ListLink>)} </nav>
      </Container>
    </navbar>
  )
}

const navbar = {
  contacts: [
    {
      title: 'Telefone:',
      description: '(92) 99189-1906',
      icon: 'call'
    },
    {
      title: 'Email:',
      description: 'contato@buritech.com.br',
      icon: 'email'
    },
    {
      title: 'Endereço:',
      description: 'UFAM, Manaus - AM',
      icon: 'location_on'
    },
    {
      description: 'Acompanhe nossas redes sociais',
      icon: 'facebook',
      position: 'end'
    },
  ],
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