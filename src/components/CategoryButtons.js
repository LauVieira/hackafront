import React from 'react';
import { Link } from 'react-router-dom';
import { AllCategories } from './style/Categories';

function CategoryButtons(props) {
  const { categories } = props;

  return (
    <AllCategories>
      {categories.map((category) => (
        <div key={ category.id } className={ `category-${category.id}` }>
          <Link to={ `/membros/${category.id}` }>
            {category.title}
          </Link>
        </div>
      ))}
    </AllCategories>
  );
}

export default CategoryButtons;
