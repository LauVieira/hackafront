import React from 'react';

function ProfileForm() {
  return (
    <div>
      <img src="" alt="Logo" />
      <header>
        <h1>
          Preencha seu perfil para começar!
        </h1>
      </header>
      <img src="" alt="Profile" />
      <form>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            name="name"
            type="text"
          />
        </label>
        <label htmlFor="career-field">
          Área de atuação
          <select id="career-field">
            <option>Selecione</option>
          </select>
        </label>
        <label htmlFor="level">
          Nível
          <select id="level">
            <option>Selecione</option>
            <option>Júnior</option>
            <option>Pleno</option>
            <option>Sênior</option>
          </select>
        </label>
        <label htmlFor="web-link">
          Webpage
          <input
            id="web-link"
            name="web-link"
            type="text"
          />
        </label>
        <label htmlFor="contact">
          Meio preferível para contato
          <input
            id="contact"
            name="contact"
            type="text"
          />
        </label>
        <label htmlFor="linkedin">
          Linkedin
          <input
            id="linkedin"
            name="linkedin"
            type="text"
          />
        </label>
        <label htmlFor="about-you">
          Conte sobre sua história
          <textarea
            id="about-you"
            name="about-you"
            maxLength="2500"
          />
        </label>
        <label htmlFor="interest">
          Posso mentorar sobre / Quero mentoria sobre
          <textarea
            id="interest"
            name="interest"
            maxLength="1000"
          />
          1000
        </label>
        <button
          type="button"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;
