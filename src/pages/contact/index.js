import React from "react"
import { Container, Item, Title, Button } from "../../components"

export default () => {
  return (
    <Container vertical>

      <Item flex center>
        <Title>  Nos envie um email: </Title>


        <Container vertical>

          <form>
            <label for="fname">Seu nome:</label><br />
            <input type="text" id="fname" name="fname" value="" /><br />

            <label for="lname">Mensagem:</label><br />
            <input type="text" id="lname" name="lname" value="" /><br />


            <label for="lemail">Seu email:</label><br />
            <input type="text" id="lemail" name="lemail" value="" /><br />


            <Button type="submit"  text="Enviar" link="/" />
          </form>

        </Container>




      </Item>

    </Container>
  )
}
