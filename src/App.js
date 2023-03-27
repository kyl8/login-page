import './App.css';
import * as React from 'react';
import { Card, NextUIProvider } from '@nextui-org/react';
import { Container, Button, Input, Spacer, Text, Link, Row } from "@nextui-org/react";

function loginForm() {
  return (
    <div>
    <Container display='flex' alignItems='center' justify='center' css={{minHeight:'100vh'}}>
        <section id='loginForm'>
            <form>
              <Card variant='shadow' css={{
                background: 'rgba(39, 39, 39, 0.20)',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                borderRadius: '10px'}}>
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
                clearable={true}
                bordered
                color='primary'
                css={{backdropFilter: 'blur(-40px)'}}>
                   
                </Input>
                <Spacer y={0.30}></Spacer>
                <Link href='#' weight='bold' css={{marginLeft: '59%'}}>
                  Esqueceu a senha?
                </Link>

                <Spacer y={0.55}></Spacer>

                <Input.Password
                type='password'
                placeholder='Senha'
                required={true}
                size='xl'
                width='330px'
                animated={true}
                bordered
                color='primary'> 
                </Input.Password>
                <Spacer y={0.55}></Spacer>
                <Button color='primary' size='xl'>Entrar</Button>
                <Spacer y={0.55}></Spacer>
                <Text weight='hairline' color='white' align='center'>Não possui conta? <Link weight='bold'>Crie uma agora!</Link></Text>
                
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
