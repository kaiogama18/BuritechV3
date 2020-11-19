import React from 'react';
import Img from "gatsby-image"
import { Footer } from './styles'
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Wrapper, Section, Item, Paragraph } from '../../styles/styles'


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
        <Footer>
            <Wrapper>
                <Section>
                    <Item>
                        <div className="cards">
                            <Img fixed={data.file.childImageSharp.fixed} />
                            <Paragraph className="link"> {footer.buriText} </Paragraph>
                        </div>
                    </Item>
                    <Item>
                        <Section>
                            <Item className="link">
                                {footer.links.map((link) => (
                                    <div key={link.title} className="center">
                                        <Link to={link.url}>{link.title}</Link>
                                    </div>
                                ))}
                            </Item>
                            <Item>
                                {footer.socials.map((social) => (
                                    <p key={social.icon}><span className="material-icons">{social.icon}</span>{social.description}</p>
                                ))}
                                <hr />
                                {footer.contacts.map((contact) => (
                                    <p key={contact.icon} ><span className="material-icons">{contact.icon}</span><b>{contact.title}</b> {contact.description} </p>
                                ))}
                            </Item>
                        </Section>
                    </Item>
                </Section>
            </Wrapper>
        </Footer>
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
            url: '/'
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
