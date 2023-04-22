import * as React from 'react';
import { Container, Button, Input, Spacer, Text, Card, Link, Modal, Fragment} from "@nextui-org/react";
import { Link as LinkRouter } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function LoginForm() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [visible, setVisible] = useState(false);

    const handleLogin = async (e) =>  {

      try {
        const response = await axios.post('http://localhost:3000/login',
        JSON.stringify({login, password}),
        {
          headers: { 'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'}
        }
      );
      console.log(login, password);
      setVisible(true);
      setError('Logado com sucesso.');
      } catch (error) {
        if (!error?.response) {
          setVisible(true);
          setError('Erro ao acessar o servidor.');
        } else if (error.response.status == 401) {
          setVisible(true);
          setError('Usuário ou senha inválidos.');
        }
   
      }
      
    }

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
                    onChange={(e) => setLogin(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                    css={{bg: '$white'}}> 
                  </Input.Password>

                  <Spacer y={0.55}></Spacer>
                  <Button color='primary' size='xl' auto 
                  onPress={(e) => handleLogin(e)}>
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

              <Modal closeButton blur open={visible} onClose={() => {setVisible(false);}}>
              <Modal.Body css={{margin: 'auto'}}>{error}</Modal.Body>
              <Modal.Footer></Modal.Footer>
              </Modal>

          </section>
      </Container>
    </div>
    
    );
  } 

export default LoginForm;