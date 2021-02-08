import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AllCategories } from './style/Categories';
import { AppContext } from '../contexts/Provider';

function CategoryButtons(props) {
  const { categories } = props;
  const { setCategory } = useContext(AppContext);
  const history = useHistory();

  function redirect(category) {
    setCategory(category.title);
    history.push(`/membros/${category.id}`);
  }

  return (
    <AllCategories>
      {categories.map((category) => (
        <div key={ category.id } className={ `category-${category.id}` }>
          <button onClick={ () => redirect(category) }>
            {category.title}
          </button>
        </div>
      ))}
    </AllCategories>
  );
}

export default CategoryButtons;
