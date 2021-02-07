import React from 'react';
import Header from '../components/Header';
import CategoryButtons from '../components/CategoryButtons';

function Categories() {
  return (
    <div>
      <Header />
      <h3>Selecione a sua categoria:</h3>
      <CategoryButtons />
    </div>
  );
}

export default Categories;