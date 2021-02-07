import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../contexts/Provider';
import {
  Main,
  PhotoSection,
  Button,
  Form,
  Final,
} from './style/Profile';

function ProfileForm() {
  const { header, user, setUser } = useContext(AppContext);
  const { name, role } = user;
  const [contactEmail, setContactEmail] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [topics, setTopics] = useState('');
  const [website, setWebsite] = useState('');
  const [clicked, setClicked] = useState(false);
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

  function submitForm(event) {
    event.preventDefault();
    setClicked(true);
    proceedSubmiting();
  }

  function proceedSubmiting() {
    const formattedObj = formatObj();
    const request = axios.post('https://egregora-back.herokuapp.com/user/profile', formattedObj, header);
    request.then((res) => submitSucceeded(res.data));
    request.catch(submitFailed);
  }

  function submitSucceeded(resData) {
    user.profileFilled = resData;
    user.title = title;
    setUser({ ...user });
    history.push('/categorias');
  }

  function submitFailed() {
    setIsHidden(false);
    setErrorMessage('Não foi possível enviar seus dados. Por favor, tente novamente.');
    setClicked(false);
  }

  const showInput = () => {
    if (formIsHidden) setFormIsHidden(false);
    else setFormIsHidden(true);
  };

  function formatObj() {
    const userData = {
      userId: user.id, description, level, linkedin, topics, photo, website, contactEmail,
    };
    return { userData, title };
  }

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
              required
            />
          </label>
        </form>
      </PhotoSection>
      <Form onSubmit={ submitForm }>
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
                type="email"
                onChange={ ({ target }) => setContactEmail(target.value) }
                value={ contactEmail }
                required
              />
            </label>
            <label htmlFor="career-field">
              <p>Área de atuação*</p>
              <select
                id="career-field"
                onChange={ ({ target }) => setTitle(target.value) }
                required
              >
                <option>Selecione</option>
                <option value={"Back-End"}>Back-End</option>
                <option value={"Data Science"}>Data Science</option>
                <option value={"Front-End"}>Front-End</option>
                <option value={"Full-Stack"}>Full-Stack</option>
                <option value={"Games"}>Games</option>
                <option value={"Mobile"}>Mobile</option>
                <option value={"Produto"}>Produto</option>
                <option value={"QA"}>QA</option>
                <option value={"Ux/Ui"}>Ux/Ui</option>
              </select>
            </label>
            <label htmlFor="linkedin">
              <p>Linkedin</p>
              <input
                id="linkedin"
                name="linkedin"
                type="text"
                value={ linkedin }
                onChange={ ({ target }) => setLinkedin(target.value) }
                required
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
                required
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
                value={ website }
                onChange={ ({ target }) => setWebsite(target.value) }
                required
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
              required
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
              required
            />
          </label>
          <div className="button-container">
            <Button disabled={ clicked }>
              Salvar
            </Button>
          </div>
        </Final>
      </Form>
    </Main>
  );
}

export default ProfileForm;
