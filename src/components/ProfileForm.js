import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../contexts/Provider';
import { emailIsValid } from '../utils/functions/formChecks';
import {
  Main,
  PhotoSection,
  Button,
  Form,
  Final,
} from './style/Profile';

function ProfileForm() {
  const { user, header } = useContext(AppContext);
  const { name, role } = user;
  const [title, setTitle] = useState('');
  const [level, setLevel] = useState('');
  const [website, setWebsite] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [description, setDescription] = useState('');
  const [topics, setTopics] = useState('');
  const [photo, setPhoto] = useState('');

  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [isHidden, setIsHidden] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [formIsHidden, setFormIsHidden] = useState(true);
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

  const showInput = () => {
    if (formIsHidden) {
      setFormIsHidden(false);
    } else {
      setFormIsHidden(true);
    }
  };

  return (
    <Main>
      <p hidden={ isHidden }>{errorMessage}</p>
      <PhotoSection>
        <h3>Perfil</h3>
        <img src={ photo } alt="profile" />
        <a onClick={ showInput }>Insira sua foto</a>
        <form hidden={ formIsHidden } className="img-form">
          <label htmlFor="image-input">
            URL da imagem
            <input
              id="img-input"
              type="text"
              onChange={ ({ target }) => setPhoto(target.value) }
            />
          </label>
        </form>
      </PhotoSection>
      <Form>
        <div className="first-part">
          <div className="first-column">
            <label htmlFor="name">
              <p>Nome*</p>
              <input
                id="name"
                name="name"
                type="text"
                value={ name }
                onChange={ ({ target }) => setName(target.value) }
              />
            </label>
            <label htmlFor="contact">
              <p>E-mail preferível para contato*</p>
              <input
                id="contact"
                name="contact"
                type="text"
                onChange={ ({ target }) => setContactEmail(target.value) }
                value={ contactEmail }
              />
            </label>
            <label htmlFor="career-field">
              <p>Área de atuação*</p>
              <select
                id="career-field"
                onChange={ ({ target }) => setTitle(target.value) }
              >
                <option>Selecione</option>
                <option>Dev Front</option>
              </select>
            </label>
            <label htmlFor="linkedin">
              <p>Linkedin</p>
              <input
                id="linkedin"
                name="linkedin"
                type="text"
                onChange={ ({ target }) => setLinkedin(target.value) }
              />
            </label>
          </div>
          <div className="second-column">
            <label htmlFor="level">
              <p>Nível*</p>
              <select
                id="level"
                onChange={ ({ target }) => setLevel(target.value) }
                value={ level }
              >
                <option>Selecione</option>
                <option value="Júnior">Júnior</option>
                <option value="Pleno">Pleno</option>
                <option value="Sênior">Sênior</option>
              </select>
            </label>
            <label htmlFor="web-link">
              <p>Webpage</p>
              <input
                id="web-link"
                name="web-link"
                type="text"
                onChange={ ({ target }) => setWebsite(target.value) }
              />
            </label>
          </div>
        </div>
        <Final>
          <label htmlFor="about-you">
            <p>Conte sobre sua história*</p>
            <textarea
              id="about-you"
              name="about-you"
              maxLength="2500"
              onChange={ ({ target }) => setDescription(target.value) }
              value={ description }
            />
          </label>
          <label htmlFor="interest">
            <p>{`${message}*`}</p>
            <textarea
              id="interest"
              name="interest"
              maxLength="1000"
              onChange={ ({ target }) => setTopics(target.value) }
              value={ topics }
            />
          </label>
          <div className="button-container">
            <Button
              disabled={ isDisabled }
              type="button"
              onClick={ handleClick }
            >
              Salvar
            </Button>
          </div>
        </Final>
      </Form>
    </Main>
  );
}

export default ProfileForm;
