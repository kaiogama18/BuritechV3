import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Button, Container, Content, Item, Title } from "../../components"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "about/img1.webp" }) {
        base
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
           }
        }
      }
      img2: file(relativePath: { eq: "about/img2.webp" }) {
        base
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Container vertical>
      <Container>
        <Item flex>
          <Title> A BURITECH </Title>
          <Content>
            Somos uma empresa regional especializada em{" "}
            <b> desenvolvimento de software</b> e na realização de treinamentos
            técnicos em linguagens de programação, engenharia de softwares e
            áreas relacionadas.
          </Content>
          <Content>
            A Buritech é uma empresa de base tecnológica, sediada na cidade de
            Manaus, que oferece a seus clientes e parceiros soluções em projetos
            de software, consultoria e treinamentos voltados à
            <b> Ciência de Dados</b>, desenvolvimento e{" "}
            <b>aplicações Web e Mobile.</b>
          </Content>
        </Item>

        <Item flex>
          <Img fluid={data.img1.childImageSharp.fluid} />
        </Item>
      </Container>

      <Container>
        <Item flex>
          <Img fluid={data.img2.childImageSharp.fluid} />
        </Item>
        <Item flex>
          <Title> POR QUE MACHINE LEARNING? </Title>
          <Content>
            Machine Learning é a parte da inteligência artificial que permite
            que sistemas aprendam automaticamente a partir da experiência.
          </Content>
          <Content>
            Data Science é a ciência que estuda as informações, seu processo de
            captura, transformação, geração e, posteriormente, análise de dados.
          </Content>

          <Content>
            Nossos projetos de web, como o desenvolvimento de sites, aplicativos
            e chatbots, são esquematizados a partir da inteligência do Machine
            Learning. <br />
            <Button
              text="veja nossos projetos"
              link="https://github.com/buritech"
            />
          </Content>
        </Item>
      </Container>
    </Container>
  )
}
