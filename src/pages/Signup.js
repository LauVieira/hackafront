import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../contexts/Provider';
import { emailIsValid, passwordIsValid } from '../utils/functions/formChecks';
import Header from '../components/Header';
import '../utils/style/signup.css';

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
    <div className="main">
      <Header />
      <p hidden={ isHidden }>{errorMessage}</p>
      <div className="secondary">
        <form className="mb-3 form">
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
          <button
            className="button"
            disabled={ isDisabled }
            type="button"
            onClick={ handleClick }
          >
            Cadastrar
          </button>
        </form>
        <div className="role-check">
          <div>
            <p>Você é:</p>
          </div>
          <div className="btn-container">
            <button
              className="btn btn-light"
              type="button"
              onClick={ ({ target }) => setRole(target.innerText) }
            >
              Mentora
            </button>
            <button
              className="btn btn-light"
              type="button"
              onClick={ ({ target }) => setRole(target.innerText) }
            >
              Mentorada
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
