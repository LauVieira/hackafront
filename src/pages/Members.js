import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../contexts/Provider';
import Header from '../components/Header';
import { data } from '../utils/data';
import { Main, CardContainer } from '../components/style/Members';

function Members() {
  const { users, setUsers, setOption } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    setOption('HOME');
    // const { id } = useParams();
    // id para a requisição
    setUsers(data);
  }, []);

  const rendersCards = (user, index) => {
    const { userDatum, name } = user;
    const { photo, id } = userDatum;
    return (
      <div key={ `user-${index}` }>
        <img src={ photo } alt={ name } />
        <h3>{name}</h3>
        <h4>title: Front-End</h4>
        <button
          type="button"
          onClick={ () => history.push(`/perfil/${id}`) }
        >
          Acesse a minibio
        </button>
      </div>
    );
  };

  if (!users) {
    return (
      <h1>Carregando...</h1>
    );
  }
  return (
    <div>
      <Header />
      <Main>
        <div>
          <h2>Mentoras:</h2>
          <CardContainer>
            {users.filter((user) => user.role === 'mentor').map((user, index) => (
              rendersCards(user, index)
            ))}
          </CardContainer>
        </div>
        <div>
          <h2>Mentorandas:</h2>
          <CardContainer>
            {users.filter((user) => user.role === 'mentored').map((user, index) => (
              rendersCards(user, index)
            ))}
          </CardContainer>
        </div>
      </Main>
    </div>
  );
}

export default Members;
