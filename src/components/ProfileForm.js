import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../contexts/Provider';
import { emailIsValid } from '../utils/functions/formChecks';

function ProfileForm() {
  const {
    name,
    setName,
    setCareer,
    setLevel,
    setWebsite,
    setContactEmail,
    setLinkedin,
    setDescription,
    setTopics,
    contactEmail,
    career,
    level,
    description,
    topics,
    role,
  } = useContext(AppContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [isHidden, setIsHidden] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (role === 'Mentora') {
      setMessage('Posso mentorar sobre');
    } else {
      setMessage('Quero mentoria sobre');
    }
  }, []);

  useEffect(() => {
    const checkInputs = () => {
      if (name && contactEmail && career && level && description && topics) {
        setIsDisabled(false);
      }
    };
    checkInputs();
  }, [name, contactEmail, career, level, description, topics]);

  const handleClick = () => {
    setIsHidden(false);
    const emailValidation = emailIsValid(contactEmail);
    if (!emailValidation) {
      setErrorMessage('E-mail inválido');
    } else {
      setIsHidden(true);
      history.push('/home');
    }
  };

  return (
    <div>
      <p hidden={ isHidden }>{errorMessage}</p>
      <form>
        <label htmlFor="name">
          Nome*
          <input
            id="name"
            name="name"
            type="text"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="career-field">
          Área de atuação*
          <select
            id="career-field"
            onChange={ ({ target }) => setCareer(target.value) }
          >
            <option>Selecione</option>
            <option>Dev Front</option>
          </select>
        </label>
        <label htmlFor="level">
          Nível*
          <select
            id="level"
            onChange={ ({ target }) => setLevel(target.value) }
            value={ level }
          >
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
            onChange={ ({ target }) => setWebsite(target.value) }
          />
        </label>
        <label htmlFor="contact">
          E-mail preferível para contato*
          <input
            id="contact"
            name="contact"
            type="text"
            onChange={ ({ target }) => setContactEmail(target.value) }
            value={ contactEmail }
          />
        </label>
        <label htmlFor="linkedin">
          Linkedin
          <input
            id="linkedin"
            name="linkedin"
            type="text"
            onChange={ ({ target }) => setLinkedin(target.value) }
          />
        </label>
        <label htmlFor="about-you">
          Conte sobre sua história*
          <textarea
            id="about-you"
            name="about-you"
            maxLength="2500"
            onChange={ ({ target }) => setDescription(target.value) }
            value={ description }
          />
        </label>
        <label htmlFor="interest">
          {`${message}*`}
          <textarea
            id="interest"
            name="interest"
            maxLength="1000"
            onChange={ ({ target }) => setTopics(target.value) }
            value={ topics }
          />
        </label>
        <button
          disabled={ isDisabled }
          type="button"
          onClick={ handleClick }
        >
          Salvar
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;
