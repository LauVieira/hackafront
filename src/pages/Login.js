import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../contexts/Provider';
import Header from '../components/Header';
import {
  Main,
  AlignmentDiv,
  ButtonContainer,
  Button,
  Form 
} from '../components/style/Login';

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
    const request = axios.post('https://egregora-back.herokuapp.com/user/sign-in', { email, password });
    request.then( (res) => submitSucceeded(res.data));
    request.catch( (err) => submitFailed(err));
  }

  function submitSucceeded(responseData) {
    setUser({...responseData.user});
    setToken(responseData.token);
    const { profileFilled } = responseData.user;
    if (profileFilled === null) return history.push('/perfil');

    const profileIsFilled = Object.keys(profileFilled).length;
    if (profileIsFilled) return history.push('/categorias');
    history.push('/perfil');
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
