import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../contexts/Provider';
import Header from '../components/Header';
import { emailIsValid, passwordIsValid } from '../utils/functions/formChecks';

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

  const handleClick = () => {
    // validar o email cadastrado no banco de dados e retornar mensagem de
    // usuário inválido se não houver
    // se houver, pegar o id do usuário e checar se já tem perfil preenchido
    // se já tiver, o history.push vai pra home
    history.push('./perfil');
  };

  return (
    <div>
      <Header />
      <form>
        <label htmlFor="email">
          Insira o seu e-mail
          <input
            id="email"
            name="email"
            type="email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password">
          Insira a sua senha
          <input
            id="password"
            name="password"
            type="password"
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
