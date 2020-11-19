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
          fixed( width: 300, quality: 100 ) {
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
                        <Img fixed={data.file.childImageSharp.fixed} />
                        <Paragraph> {footer.buriText} </Paragraph>
                    </Item>
                    <Item>
                        <Section>

                            <Item>
                                {footer.links.map((link) => (
                                    <div className="center">
                                        <Link className="link" to={link.url}>{link.title}</Link>
                                    </div>
                                ))}
                            </Item>

                            <Item>
                                <p> Created by Kaio B. Gama - © BuriTech. Todos os direitos reservados </p>
                            </Item>


                        </Section>
                    </Item>
                </Section>
            </Wrapper>
        </Footer>
    )
}


const footer = {
    buriText: ' A Buritech é uma empresa tecnológica da cidade de Manaus que oferece soluções em projetos de software, consultoria e treinamentos voltados à Ciência de Dados, desenvolvimento e aplicações Web e Mobile.',
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
    ]
};
