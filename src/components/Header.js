import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../contexts/Provider';
import '../utils/style/profile.css';

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
    <header className="header">
      <img src="" alt="Logo" />
      <button type="button" onClick={ handleClick }>
        {option}
      </button>
    </header>
  );
}

export default Header;
