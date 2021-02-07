import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AppContext } from '../contexts/Provider';
import { emailIsValid, passwordIsValid } from '../utils/functions/formChecks';
import Header from '../components/Header';

function Signup() {
  const {
    email,
    password,
    setEmail,
    setPassword,
    name,
    setName,
    role,
    setRole,
    setOption,
  } = useContext(AppContext);
  const [secPassword, setSecPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  useEffect(() => {
    setOption('HOME');
  }, []);

  useEffect(() => {
    const checkInputs = () => {
      if (email && password && name && secPassword && role) {
        setIsDisabled(false);
      }
    };
    checkInputs();
  }, [email, password, name, secPassword, role]);

  const handleClick = () => {
    setIsHidden(false);
    const emailValidation = emailIsValid(email);
    const passwordValidation = passwordIsValid(password);
    if (password !== secPassword) {
      setErrorMessage('Senhas não conferem!');
    } else if (!passwordValidation) {
      setErrorMessage('A senha deve ter mais de 6 caracteres');
    } else if (!emailValidation) {
      setErrorMessage('E-mail inválido');
    } else {
      setIsHidden(true);
      history.push('/perfil');
    }
  };

  return (
    <Main>
      <Header />
      <p hidden={ isHidden }>{errorMessage}</p>
      <div className="secondary">
        <Form className="mb-3 form">
          <h3>Cadastrar</h3>
          <label htmlFor="name" className="form-label">
            Nome
            <input
              className="form-control"
              id="name"
              name="name"
              type="text"
              onChange={ ({ target }) => setName(target.value) }
            />
          </label>
          <label htmlFor="email" className="form-label">
            E-mail
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              onChange={ ({ target }) => setEmail(target.value) }
            />
          </label>
          <label htmlFor="password" className="form-label">
            Senha
            <input
              className="form-control"
              id="password"
              name="password"
              type="password"
              onChange={ ({ target }) => setPassword(target.value) }
            />
          </label>
          <label htmlFor="repeat-password" className="form-label">
            Repetir senha
            <input
              className="form-control"
              id="repeat-password"
              name="repeat-password"
              type="password"
              onChange={ ({ target }) => setSecPassword(target.value) }
            />
          </label>
          <Button
            className="button"
            disabled={ isDisabled }
            type="button"
            onClick={ handleClick }
          >
            Cadastrar
          </Button>
        </Form>
        <RoleCheck>
          <p>Você será:</p>
          <div className="btn-container">
            <ButtonRight
              type="button"
              onClick={ ({ target }) => setRole(target.innerText) }
            >
              Mentora
            </ButtonRight>
            <ButtonRight
              type="button"
              onClick={ ({ target }) => setRole(target.innerText) }
            >
              Mentorada
            </ButtonRight>
          </div>
        </RoleCheck>
      </div>
    </Main>
  );
}

export default Signup;

const Main = styled.main`
  background-color: #A67777;
  height: 100vh;

  h3 {
    color: #F2BDC1;
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 2em;
  }

  .secondary {
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin-top: 5%;
    width: 100%;
  }
`;

const RoleCheck = styled.div`
  align-self: flex-start;
  justify-content: center;
  color: #FFFFFF;
  width: 30%;
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.5em;
    margin-bottom: 2em;
  }

  .btn-container {
    display: flex;
    justify-self: flex-start;
  }
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

const ButtonRight = styled.button`
  background-color: #FFF;
  border-radius: 5px;
  color: #000;
  display: flex;
  justify-content: center;
  margin-right: 1em;
  padding: 10px;
  width: 200px;
`;

const Form = styled.form`
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  width: 40vw;

  input {
    color: black;
    background-color: #FFFFFF;
    padding: 10px;
    margin: 5px 0 20px 0;
    border-radius: 5px;
    width: 100%;
  }
`;
