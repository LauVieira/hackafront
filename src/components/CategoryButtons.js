import React from 'react';
import {Link} from 'react-router-dom';
import {AllCategories} from './style/Categories';

function CategoryButtons() {
const mockCategories = [
  'Front-End',
  'Back-End',
  'Full-Stack',
  'Ux/Ui',
  'Produto',
  'Data Science',
  'QA',
  'Games',
  'Mobile'];

  return (
    <AllCategories>
      {mockCategories.map((category, index) => (
        <div className={`category-${index}`}>
          <Link to={`/membros/${index}`}>
            {category.toUpperCase()}
          </Link>
        </div>
      ))}
    </AllCategories>
  );
}

export default CategoryButtons;
