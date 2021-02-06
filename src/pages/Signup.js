import React from 'react';

function Signup() {
  return (
    <div>
      <img src="" alt="Logo" />
      <form>
        <input
          name="name"
          type="text"
          placeholder="Nome"
        />
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
        <input
          name="repeat-password"
          type="password"
          placeholder="Repetir senha"
        />
        <select>
          <option>Selecione</option>
          <option>Quero ser mentorada</option>
          <option>Quero ser mentora</option>
        </select>
        <button
          type="button"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Signup;
