import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../contexts/Provider';
import Header from '../components/Header';
import { Main, CardContainer } from '../components/style/Members';

function Members() {
  const { users, setUsers, setOption, header } = useContext(AppContext);
  const history = useHistory();
  const categodyId = useParams().id;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setOption('HOME');
    getMembers();
  }, []);

  function getMembers() {
    const request = axios.get(`https://egregora-back.herokuapp.com/career/${categodyId}/users`, header);
    request.then((res) => {
      setUsers([...res.data]);
      setLoading(false);
    });
  }

  const rendersCards = (user, index) => {
    const { userDatum, name } = user;
    const { photo, userId } = userDatum;
    return (
      <div key={ `user-${index}` }>
        <img src={ photo } alt={ name } />
        <h3>{name}</h3>
        <h4>title: Front-End</h4>
        <button
          type="button"
          onClick={ () => history.push(`/perfil/${userId}`) }
        >
          Acesse a minibio
        </button>
      </div>
    );
  };

  if (users.length === 0) {
    if (loading === false) return (<h1>Ainda não há ninguém nessa categoria</h1>);
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
            {users.filter((user) => user.role === 'Mentora').map((user, index) => (
              rendersCards(user, index)
            ))}
          </CardContainer>
        </div>
        <div>
          <h2>Mentorandas:</h2>
          <CardContainer>
            {users.filter((user) => user.role === 'Mentorada').map((user, index) => (
              rendersCards(user, index)
            ))}
          </CardContainer>
        </div>
      </Main>
    </div>
  );
}

export default Members;
