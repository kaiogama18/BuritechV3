import React from "react"
import { Button, Container, Item, Title } from "../../components"
import { Form } from "./styles"

export default () => {
  return (
    <Form>
      <Container vertical>
        <Item flex align={"center"}>
          <Title> Nos envie um email: </Title>
        </Item>
      </Container>
      <Container backgroundColor={"#edf3f9"}>
        <Item flex align={"center"}>
          <form action="/" id="usrform">
            <label htmlFor="usrname">Seu nome:</label>
            <input type="text" name="usrname" value="" />

            <label htmlFor="lname">Mensagem:</label>
            <textarea rows="4" cols="50" name="comment" form="usrform" />

            <label htmlFor="usremail">Seu email:</label>
            <input type="email" name="usremail" value="" />

            <Button type="submit" text="Enviar" link="/" />
          </form>
        </Item>
      </Container>
    </Form>
  )
}
