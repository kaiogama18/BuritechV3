
import React from "react"
import { Container, Content, Item } from "../../components"
import { Title } from "../../components/title/styles"

export default () => {
  return (
    <Container vertical>

      <Item flex>
      <Title>  Sites e Aplicativo </Title>
      <Content>
        A Buritech desenvolve soluções web para auxiliar nos processos de
        negócio da sua empresa, como sites para venda de produtos/serviços,
        extração de dados para criação de relatórios gerenciais, entre outros
        serviços.
        

        Aplicativos para Android e iOS também podem ser desenvolvidos para
        auxiliar nos negócios dos nossos clientes.

        Em geral, já há um sistema de retaguarda e API de acesso às bases de
        dados. Nesse caso, nosso time de desenvolvimento trabalha em
        parceria com o time técnico do cliente na construção do aplicativo.
      </Content>

      </Item>

    </Container>
  )
}


