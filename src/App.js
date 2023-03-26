import './App.css';
import * as React from 'react';
import { Card, NextUIProvider } from '@nextui-org/react';
import { Container, Button, Input, Spacer, Text } from "@nextui-org/react";

function loginForm() {
  return (
    <div>
    <Container display='flex' alignItems='center' justify='center' css={{minHeight:'100vh'}}>
        <section id='loginForm'>
            <form>
              <Card variant='shadow' css={{
                background: 'rgba(39, 39, 39, 0.1)',
                backdropFilter: 'blur(20px)'}}>
                <Card.Body>
                  <Text h2 weight='hairline' align='center'>Entrar</Text>
                  <Spacer y={-0.55}></Spacer>
                  <Text h5 weight='hairline' align='center' css={{opacity: '60%'}}> 
                  Para continuar preencha suas informações.
                  </Text>
                  <Spacer y={1}></Spacer>
                <Input
                type='text'
                placeholder='Usuário'
                required={true}
                size='xl'
                width='330px'
                color='primary'
                clearable={true}
                color={{background:'red'}}
                >
                   
                </Input>

                <Spacer y={0.55}></Spacer>

                <Input.Password
                type='password'
                placeholder='Senha'
                required={true}
                size='xl'
                width='330px'
                animated={true}
                color='primary'> 
                </Input.Password>
                <Spacer y={0.55}></Spacer>
                <Button size='xl'>Entrar</Button>
                </Card.Body>
                </Card>
            </form> 
        </section>
    </Container>
  </div>
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
