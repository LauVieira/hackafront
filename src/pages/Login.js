import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../contexts/Provider';

const MIN_PASSWORD_LENGTH = 6;

function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function passwordIsValid(password) {
  return password.length >= MIN_PASSWORD_LENGTH;
}

function Login() {
  const { email, password, setEmail, setPassword } = useContext(AppContext);
  const [isDisabled, setIsDisabled] = useState('true');
  const history = useHistory();

  useEffect(() => {
    const inputValidation = () => {
      const emailValidation = emailIsValid(email);
      const passwordValidation = passwordIsValid(password);

      if (emailValidation && passwordValidation) {
        setIsDisabled('false');
      } else {
        setIsDisabled('true');
      }
    };
    inputValidation();
  }, [email, password]);

  const handleClick = () => {
    // validar o email cadastrado no banco de dados e retornar mensagem de
    // usuário inválido se não houver
    // se houver, pegar o id do usuário e checar se já tem perfil preenchido
    // se já tiver, o history.push vai pra home
    history.push('./perfil');
  };

  return (
    <div>
      <img src="" alt="Logo" />
      <form>
        <label htmlFor="email">
          E-mail
          <input
            id="email"
            name="email"
            type="email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <Link to="/cadastro">
          Não possui cadastro? Clique aqui!
        </Link>
        <button
          disabled={ !isDisabled }
          type="button"
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
