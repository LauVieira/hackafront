import React from 'react';
import {Link} from 'react-router-dom';

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
    <div>
      {mockCategories.map((category, index) => (
        <Link to={`/membros/${index}`}>
          {category}
        </Link>
      ))}
    </div>
  );
}

export default CategoryButtons;