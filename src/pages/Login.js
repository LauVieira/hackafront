import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <img src="" alt="Logo" />
      <form>
        <input
          name="email"
          type="email"
          placeholder="E-mail"
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
        />
        <Link to="/cadastro">
          Não possui cadastro? Clique aqui
        </Link>
        <button
          type="button"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
