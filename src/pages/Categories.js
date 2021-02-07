/* eslint-disable no-magic-numbers */

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../contexts/Provider';
import Header from '../components/Header';
import CategoryButtons from '../components/CategoryButtons';
import { Main } from '../components/style/Categories';

function Categories() {
  const { header, setOption } = useContext(AppContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setOption('HOME');
    getCategories();
  }, []);

  function getCategories() {
    const request = axios.get('https://egregora-back.herokuapp.com/career', header);
    request.then((res) => setCategories([...res.data]));
  }

  return (
    <div>
      <Header />
      <Main>
        <h3>Selecione a sua categoria:</h3>
        {categories.length > 0 && <CategoryButtons categories={ categories } />}
      </Main>
    </div>
  );
}

export default Categories;
