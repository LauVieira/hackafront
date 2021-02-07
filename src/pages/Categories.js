import React, { useContext, useEffect } from 'react';
import { AppContext } from '../contexts/Provider';
import Header from '../components/Header';
import CategoryButtons from '../components/CategoryButtons';
import { Main } from '../components/style/Categories';

function Categories() {

  const { setOption } = useContext(AppContext);

  useEffect(() => {
    setOption('HOME');
  }, []);

  return (
    <div>
      <Header />
      <Main>
        <h3>Selecione a sua categoria:</h3>
        <CategoryButtons />
      </Main>
    </div>
  );
}

export default Categories;