import * as React from 'react';
import { Container, Button, Input, Spacer, Text, Card, Modal, Dropdown} from "@nextui-org/react";
import { useState } from 'react';
import axios from 'axios';

function Register() {

  const geraEstados = (props) => {
    const dTag = `<Dropdown.Menu>`
  }

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [estado, setEstado] = useState('');
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(false);

  const handleRegister = async (e) =>  {
    try {
      const response = await axios.post('http://localhost:3000/register',
      JSON.stringify({login, password, confirmPassword, email, date}),
      {
        headers: { 'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*'}
      }
    );
      console.log(login, password, confirmPassword, email, date);
      setVisible(true);
      setError('Registrado com sucesso!');

    } catch (error) {
      if (!error?.response) {
        setVisible(true);
        setError('Erro ao acessar o servidor.');
      } else if (error.response.status == 401) {
      setVisible(true);
      setError('Senhas não são iguais.');
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

                    <Text h2 weight='hairline' align='center'>Registro</Text>
                    <Spacer y={-0.5}></Spacer>
                    <Text h5 weight='hairline' align='center' css={{opacity: '60%'}}> 
                    Para continuar preencha suas informações.
                    </Text>
                    <Spacer y={0.5}></Spacer>

                  <Input
                  type='text'
                  placeholder='Usuário'
                  required={true}
                  size='lg'
                  width='330px'
                  clearable={true}
                  bordered
                  color='primary'
                  onChange={(e) => setLogin(e.target.value)}
                  css={{bg: '$white'}}>
                  </Input>

                  <Spacer y={0.55}></Spacer>

                  <Input.Password
                  type='password'
                  placeholder='Senha'
                  required={true}
                  size='lg'
                  width='330px'
                  animated={true}
                  bordered
                  color='primary'
                  onChange={(e) => setPassword(e.target.value)}
                  css={{bg: '$white'}}>
                  </Input.Password>

                  <Spacer y={0.55}></Spacer>

                  <Input.Password
                  type='password'
                  placeholder='Confirmar Senha'
                  required={true}
                  size='lg'
                  width='330px'
                  animated={true}
                  bordered
                  color='primary'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  css={{bg: '$white'}}> 
                  </Input.Password>

                  <Spacer y={0.55}></Spacer>

                  <Input
                  type='text'
                  placeholder='E-mail'
                  required={true}
                  size='lg'
                  width='330px'
                  clearable={true}
                  bordered
                  color='primary'
                  onChange={(e) => setEmail(e.target.value)}
                  css={{bg: '$white'}}>
                  </Input>

                  <Spacer y={0.55}></Spacer>

                  <Input
                  type='date'
                  required={true}
                  size='lg'
                  width='330px'
                  bordered
                  color='primary'
                  onChange={(e) => setDate(e.target.value)}
                  css={{bg: '$white'}}>
                  </Input>


                  <Spacer y={0.55}></Spacer>
          
                  <Dropdown>
                        <Dropdown.Button color='white'>Estado</Dropdown.Button>
                        <Dropdown.Menu aria-label="Estado">
                          <Dropdown.Item> New file</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                  <Spacer y={0.55}></Spacer>
                  <Button color='primary' size='lg' auto onPress={(e) => handleRegister(e)}>
                    Registrar
                    </Button>

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

export default Register;