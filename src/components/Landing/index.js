import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button} from "reactstrap";
import Header from "../Header";

// eslint-disable-next-line no-undef
export default class Cadastro extends Component {
  render() {
    return (

      <div>
        <Header title= "Cadastre-se"/>
        <hr/>

        <></>
      <Form>
        
        <FormGroup>
          <Label for="email"> Email </Label>
          <Input type="text" id="email" placeholder="Informe seu email:" />
        </FormGroup>

        <FormGroup>
          <Label for="nome"> Nome </Label>
          <Input type="text" id="nome" placeholder="Informe seu nome:" />
        </FormGroup>

        <FormGroup>
          <Label for="observacoes"> Observações </Label>
          <Input type="text" id="observacoes" placeholder="Digite seu texto" />
        </FormGroup>

        <Button color="primary" block> Entrar </Button>

      </Form>

      </div>
    );
  }
}
