import React from "react"
import { Form } from './styles'
import { Container, Item, Title, Button } from "../../components"

export default () => {
  return (
    <Form>
      <Container vertical>
      <Item flex align={"center"}>
        <Title>  Nos envie um email: </Title>
      </Item>

      </Container>
      <Container backgroundColor={'#edf3f9'} >
        <Item flex align={"center"}>
          <form action="/" id="usrform">

            <label for="usrname">Seu nome:</label>
            <input type="text" name="usrname" value=""/>

            <label for="lname">Mensagem:</label>
            <textarea rows="4" cols="50" name="comment" form="usrform"/>
           
            <label for="usremail">Seu email:</label>
            <input type="email" name="usremail" value=""/>
            
            <Button type="submit" text="Enviar" link="/" />
          </form>
        </Item>
      </Container>
    </Form>
  )
}
