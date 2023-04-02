import * as React from 'react';
import { Container, Button, Input, Spacer, Text, Card, Link} from "@nextui-org/react";
import { Link as LinkRouter } from 'react-router-dom';
import { Avatar } from '@nextui-org/react';


function LoginForm() {
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
                  css={{bg: '$white'}}>
                  </Input>

                  <Spacer y={0.30}></Spacer>
                  <Link weight='bold' css={{marginLeft: '59%'}}>
                    <LinkRouter to='/forgotpassword'>Esqueceu a senha?</LinkRouter>
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
                  color='primary'
                  css={{bg: '$white'}}> 
                  </Input.Password>

                  <Spacer y={0.55}></Spacer>
                  <Button color='primary' size='xl' auto>
                    Entrar
                    </Button>
                  <Spacer y={0.55}></Spacer>
                  <Text weight='hairline' color='white' align='center'>
                  Não possui conta?
                  <Link weight='bold' css={{marginLeft: '0.5vh'}}>
                    <LinkRouter to='/register'>Crie uma agora!</LinkRouter>
                  </Link>
                  </Text>
                  

                  </Card.Body>
                  </Card>
              </form> 
          </section>
      </Container>
    </div>
    );
  } 

export default LoginForm;