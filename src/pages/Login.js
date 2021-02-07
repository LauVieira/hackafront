import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../contexts/Provider';
import Header from '../components/Header';
import { emailIsValid, passwordIsValid } from '../utils/functions/formChecks';
import {
  Main,
  AlignmentDiv,
  ButtonContainer,
  Button,
  Form } from '../components/style/Login';

function Login() {
  const { email, password, setEmail, setPassword, setOption } = useContext(AppContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setOption('HOME');
  }, []);

  useEffect(() => {
    const inputValidation = () => {
      const emailValidation = emailIsValid(email);
      const passwordValidation = passwordIsValid(password);

      if (emailValidation && passwordValidation) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    inputValidation();
  }, [email, password]);

  const handleSubmit = () => {
    // validar o email cadastrado no banco de dados e retornar mensagem de
    // usuário inválido se não houver
    // se houver, pegar o id do usuário e checar se já tem perfil preenchido
    // se já tiver, o history.push vai pra home
    history.push('/perfil');
  };

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
        <Form className="mb-3 form">
          <label htmlFor="email" className="form-label">
            <p>Insira o seu e-mail</p>
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value) }
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
            />
          </label>
          <ButtonContainer>
            <Button
              className="button"
              disabled={ isDisabled }
              type="button"
              onClick={ handleSubmit }
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
