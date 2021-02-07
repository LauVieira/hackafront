import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../contexts/Provider';
import Header from '../components/Header';
import styled from 'styled-components';

function Login() {
  const { setOption, setUser, setToken } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setOption('HOME');
  }, []);

  function submitForm(event) {
    event.preventDefault();
    setClicked(true);
    proceedSubmiting();
  }

  function proceedSubmiting() {
    const request = axios.post('http://localhost:3000/user/sign-in', { email, password });
    request.then( (res) => submitSucceeded(res.data));
    request.catch( (err) => submitFailed(err));
  }

  function submitSucceeded(responseData) {
    setUser({...responseData.user});
    setToken(responseData.token);

    const { profileFilled } = responseData.user;
    const pushToProfile = Object.keys(profileFilled).length === 0;

    if (pushToProfile) history.push('/perfil');
    history.push('/home')
  }

  function submitFailed(error) {
    setClicked(false);
  }

  return (
    <Main>
      <Header />
      <div className="secondary">
        <section className="signup-section">
          <h3 className="greeting">Você é nova por aqui?</h3>
          <p className="main-text">
            Sei que você está ansiosa para encontrar 
            a sua mentora mas é necessário realizar um 
            pequeno cadastro antes de você ter acesso a
            base de mentoras cadastradas.
          </p>

          <AlignmentDiv>
            <p className="end-text">Vamos lá?</p>
            <Button
              className="button"
              type="button"
              onClick={ () => history.push('/cadastro') }
            >
              Cadastro
            </Button>
          </AlignmentDiv>
        </section>
        <Form className="mb-3 form" onSubmit={ submitForm }>
          <label htmlFor="email" className="form-label">
            <p>Insira o seu e-mail</p>
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value) }
              required
            />
          </label>
          <label htmlFor="password" className="form-label">
            <p>Insira a sua senha</p>
            <input
              className="form-control"
              id="password"
              name="password"
              type="password"
              value={ password }
              onChange={ ({ target }) => setPassword(target.value) }
              required
            />
          </label>
          <ButtonContainer>
            <Button
              className="button"
              disabled={ clicked }
            >
              Entrar
            </Button>
          </ButtonContainer>
        </Form>
      </div>
    </Main>
  );
}

export default Login;

const Main = styled.main`
  background-color: #A67777;
  height: 100vh;
  font-size: 1.2em;

  .secondary {
    align-items: flex-start;
    background-color: #A67777;
    display: flex;
    height: 100%;
    justify-content: space-around;
    padding-top: 10%;
    width: 100%;
  }

  .signup-section {
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    line-height: 1.5em;
    width: 50%;
  }

  .greeting {
    color: #F2BDC1;
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 2em;
  }

  .end-text {
    align-self: flex-end;
  }

`;

const AlignmentDiv = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;

  p {
    margin: 12% 0 10px 0;
    text-align: right;
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-top: 15%;
`; 

const Button = styled.button`
  background-color: #F2BDC1;
  border-radius: 5px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 200px;

  &:disabled {
    opacity: 0.6;
  }
`;

const Form = styled.form`
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  width: 30%;

  input {
    background-color: #FFFFFF;
    border-radius: 5px;
    color: #000;
    padding: 10px;
    margin: 5px 0 10px 0;
    width: 100%;
  }
`;
