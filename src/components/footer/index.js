import React from 'react';
import Img from "gatsby-image"
import { Container, Content, Item, Title } from '..';
import { graphql, Link, useStaticQuery } from 'gatsby';


export default () => {

    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo_white.png" }) {
        childImageSharp {
          fixed(width: 200, quality: 100) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
    `)

    return (
        <footer>
            <Container backgroundColor={'#525659'} color={'#fff'} vertical>
                <Item flex>
                    <Img fixed={data.file.childImageSharp.fixed} />
                    <Content className="link"> {footer.buriText} </Content>
                </Item>
                <Item flex only={'desktop'}>
                    {footer.links.map((link) => <Title link normal url={link.url} vertical>  {link.title} </Title>)}
                </Item>
                <Item flex>
                    {footer.socials.map((social) => (
                        <p key={social.icon}><span className="material-icons">{social.icon}</span>{social.description}</p>
                    ))}
                    <hr />
                    {footer.contacts.map((contact) => (
                        <p key={contact.icon} ><span className="material-icons">{contact.icon}</span><b>{contact.title}</b> {contact.description} </p>
                    ))}
                </Item>

            </Container>
        </footer>

    )
}


const footer = {
    buriText: ' A Buritech é uma empresa da cidade de Manaus que oferece soluções de software, consultoria e treinamentos, desenvolvimento e aplicações Web e Mobile.',
    links: [
        {
            title: 'Quem Somos',
            url: '/about'
        },
        {
            title: 'Serviços',
            url: '/portfolio'
        },
        {
            title: 'Metodologia',
            url: '/404'
        },
        {
            title: 'Contato',
            url: '/contact'
        },
    ],
    socials: [
        {
            description: '@buritech',
            icon: 'facebook'
        },
    ],
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
            description: 'UFAM - Coroado, Manaus - AM',
            icon: 'location_on'
        },
    ]
};

