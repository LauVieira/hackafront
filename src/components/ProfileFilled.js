import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../contexts/Provider';
import { emailIsValid } from '../utils/functions/formChecks';
import {data} from '../utils/data';
import {
  Main,
  PhotoSection,
  Button,
  Form,
  Final } from './style/Profile';

function ProfileForm() {
  const {
    name,
    contactEmail,
    career,
    level,
    description,
    topics,
    role,
    photo,
    linkedin,
    website,
    fetchUserData,
  } = useContext(AppContext);
  const [message, setMessage] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (role === 'mentor') {
      setMessage('Mentora sobre');
    } else {
      setMessage('Quer mentoria sobre');
    }
  }, []);

  useEffect(() => {
    fetchUserData(data[0]);
  }, []);


  return (
    <Main>
      <PhotoSection>
        <h3>Perfil</h3>
        <img src={ photo } alt="profile" />
      </PhotoSection>
      <Form>
        <div className="first-part">
          <div className="first-column">
            <h4>Nome</h4>
            <h5>{ name }</h5>
            <h4>E-mail preferível para contato</h4>
            <h5>{ contactEmail }</h5>
            <h5>Área de atuação</h5>
            <h4>{career}</h4>
            <h5>Linkedin</h5>
            <h4>{linkedin}</h4>
          </div>
          <div className="second-column">
            <h4>Nível</h4>
            <h5>{ level }</h5>
            <h4>Webpage</h4>
            <h5>{ website }</h5>
          </div>
        </div>
        <Final>
          <h4>{ `Sobre ${name}` }</h4>
          <p>{ description }</p>
          <h4>{ message }</h4>
          <h5>{ topics }</h5>
          <Button
            type="button"
            onClick={() => history.push('/categorias')}
          >
            Voltar
          </Button>
        </Final>
      </Form>
    </Main>
  );
}

export default ProfileForm;
