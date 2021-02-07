import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../contexts/Provider';
import { emailIsValid, passwordIsValid } from '../utils/functions/formChecks';

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
  } = useContext(AppContext);
  const [secPassword, setSecPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

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
    <div>
      <img src="" alt="Logo" />
      <p hidden={ isHidden }>{errorMessage}</p>
      <form>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            name="name"
            type="text"
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <label htmlFor="repeat-password">
          Repetir senha
          <input
            id="repeat-password"
            name="repeat-password"
            type="password"
            placeholder="Repetir senha"
            onChange={ ({ target }) => setSecPassword(target.value) }
          />
        </label>
        <select onChange={ ({ target }) => setRole(target.value) }>
          <option>Selecione</option>
          <option>Quero ser mentorada</option>
          <option>Quero ser mentora</option>
        </select>
        <button
          disabled={ isDisabled }
          type="button"
          onClick={ handleClick }
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Signup;
