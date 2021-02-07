import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { AppContext } from '../contexts/Provider';
import { emailIsValid, passwordIsValid } from '../utils/functions/formChecks';
import Header from '../components/Header';

function Signup() {
  const { setOption } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isHidden, setIsHidden] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [clicked, setClicked] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setOption('HOME');
  }, []);

  function submitForm(event) {
    event.preventDefault();
    setClicked(true);
    const fieldsOk = checkFields();
    if (fieldsOk) proceedSubmiting();
    if (!fieldsOk) setClicked(false);
  }

  function proceedSubmiting() {
    const request = axios.post('http://localhost:3000/user/sign-up', { name, email, password, passwordConfirmation, role });
    request.then(submitSucceeded);
    request.catch(submitFailed);
  }

  function submitSucceeded() {
    history.push('/');
  }

  function submitFailed() {
    setIsHidden(false);
    setErrorMessage('Não foi possível enviar seus dados. Por favor, tente novamente.');
    setClicked(false);
  }

  const checkFields = () => {
    setIsHidden(false);
    const emailValidation = emailIsValid(email);
    const passwordValidation = passwordIsValid(password);

    if (!role) {
      setErrorMessage('Por favor, escolha entre mentora e mentorada');
      return false;
    }
    if (password !== passwordConfirmation) {
      setErrorMessage('Senhas não conferem!');
      return false;
    }
    if (!passwordValidation) {
      setErrorMessage('A senha deve ter mais de 6 caracteres');
      return false;
    }
    if (!emailValidation) {
      setErrorMessage('E-mail inválido');
      return false;
    }

    setIsHidden(true);
    return true;
  };

  return (
    <Main>
      <Header />
      <p hidden={ isHidden }>{errorMessage}</p>
      <div className="secondary">
        <Form className="mb-3 form" onSubmit={ submitForm }>
          <h3>Cadastrar</h3>
          <label htmlFor="name" className="form-label">
            Nome
            <input
              className="form-control"
              value={ name }
              id="name"
              name="name"
              type="text"
              onChange={ ({ target }) => setName(target.value) }
              required
            />
          </label>
          <label htmlFor="email" className="form-label">
            E-mail
            <input
              className="form-control"
              value={ email }
              id="email"
              name="email"
              type="email"
              onChange={ ({ target }) => setEmail(target.value) }
              required
            />
          </label>
          <label htmlFor="password" className="form-label">
            Senha
            <input
              className="form-control"
              value={ password }
              id="password"
              name="password"
              type="password"
              onChange={ ({ target }) => setPassword(target.value) }
              required
            />
          </label>
          <label htmlFor="repeat-password" className="form-label">
            Repetir senha
            <input
              className="form-control"
              value={ passwordConfirmation }
              id="repeat-password"
              name="repeat-password"
              type="password"
              onChange={ ({ target }) => setPasswordConfirmation(target.value) }
              required
            />
          </label>
          <Button
            className="button"
            disabled={ clicked }
          >
            Cadastrar
          </Button>
        </Form>
        <RoleCheck>
          <p>Você será:</p>
          <div className="btn-container">
            <ButtonRight
              type="button"
              onClick={ () => setRole('Mentora') }
            >
              Mentora
            </ButtonRight>
            <ButtonRight
              type="button"
              onClick={ () => setRole('Mentorada') }
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

  input {
    color: #000;
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
    background-color: #FFFFFF;
    padding: 10px;
    margin: 5px 0 20px 0;
    border-radius: 5px;
    width: 100%;
  }
`;
