import './App.css';
import * as React from 'react';
import { Card, NextUIProvider } from '@nextui-org/react';
import { Container, Row, Col, Input, Spacer, Text } from "@nextui-org/react";

function loginForm() {
  return (
  <Container fluid>
    <Row justify='center' align='center'>  
      <section id='loginForm'>
          <form>
            <Card variant='shadow'>
              <Card.Body>
                <Text h3 weight='hairline' align='center'>Entrar</Text>
              <Input
              type='text'
              placeholder='Usuário'
              required={true}
              size='xl'
              width='250px'
              color='primary'
              clearable={true}> 
              </Input>

              <Spacer y={0.55}></Spacer>

              <Input.Password
              type='password'
              placeholder='Senha'
              required={true}
              size='xl'
              width='250px'
              animated={true}
              color='primary'> 
              </Input.Password>
              </Card.Body>
              </Card>
          </form> 
      </section>
      </Row>
  </Container>
  );
}

function App( {Component}) {
  return (
    <NextUIProvider>
      {loginForm()};
    </NextUIProvider>
  )
}

export default App;
