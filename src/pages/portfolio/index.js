
import React from "react"
import Img from "gatsby-image";
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Content, Item, Title } from "../../components"

export default () => {

  const data = useStaticQuery(graphql`
        query {
            img1: file(relativePath: { eq: "portfolio/chat.webp" }) {
            base
            childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
            img2: file(
                relativePath: { eq: "portfolio/graphic.webp" }
            ) {
                base
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }

            img3: file(relativePath: { eq: "portfolio/metodologia.webp" }) {
              base
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
        }
    `)



  return (
    <>
      <Container vertical>
        <Item flex>
          <Title>  Sites e Aplicativo </Title>
          <Content>
            A Buritech desenvolve <b>soluções web</b> para auxiliar nos processos de negócio da sua empresa, como sites para venda de produtos/serviços,
            extração de dados para criação de relatórios gerenciais, entre outros serviços.
          </Content>
          <Content> <b>Aplicativos</b> para Android e iOS também podem ser desenvolvidos para auxiliar nos negócios dos nossos clientes.</Content>
          <Content> Em geral, já há um sistema de retaguarda e API de acesso às bases de dados. Nesse caso, nosso time de desenvolvimento trabalha em parceria com o time técnico do cliente na construção do aplicativo. </Content>
        </Item>
        <Item >
          <Content>
            <Title normal>  Metodologia para sites e aplicativos: </Title>
            <Img fluid={data.img3.childImageSharp.fluid} />
          </Content>
        </Item>
      </Container>

      <Container backgroundColor={'#edf3f9'} vertical>
        <Item flex> <Img fluid={data.img1.childImageSharp.fluid} />  </Item>
        <Item flex>
          <Title>  ChatBOTs </Title>
          <Content>
            Todo BOT é especializado em um assunto e para que ele seja capaz de interagir com um humano e
            executar tarefas para o qual foi ensinado, é necessário seguir algumas etapas do projeto.
          </Content>
          <Content>
            Aqui chamamos de <b> "Jornada Chatbot":</b>
          </Content>
        </Item>
      </Container>
      <Container backgroundColor={'#edf3f9'} >
        <Item flex> <Img fluid={data.img2.childImageSharp.fluid} />  </Item>
      </Container>
      <Container vertical>
        <Item flex>
          <Title>  Ciência de Dados </Title>
          <Content>
            <b>Data Science</b>, ou Ciência de Dados, é a ciência que estuda as informações, seu processo de captura, transformação, geração e, posteriormente, análise de dados.<br />
      Nosso time de pesquisadores de <b>Ciência de Dados</b> transforma os dados da sua empresa em informações valiosas que podem ser utilizadas para auxiliar à tomada de decisão.<br />
      Nós treinamos os modelos preditivos criados para ajudar a resolver problemas da sua empresa, avaliamos o desempenho alcançado pelas previsões geradas e comunicamos as descobertas, utilizando gráficos e visualização interativa.<br />
      Para alcançar o objetivo é preciso cumprir algumas fases, a <b>“Jornada do Projeto"</b>.
      </Content>
        </Item>
      </Container>
    </>
  )
}


