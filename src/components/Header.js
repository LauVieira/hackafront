import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../contexts/Provider';

function Header() {
  const { option } = useContext(AppContext);
  const history = useHistory();

  const handleClick = () => {
    if (option === 'LOGIN') {
      history.push('/login');
    } else {
      history.push('/home');
    }
  };

  return (
    <div>
      <img src="" alt="Logo" />
      <button type="button" onClick={ handleClick }>
        {option}
      </button>
    </div>
  );
}

export default Header;
