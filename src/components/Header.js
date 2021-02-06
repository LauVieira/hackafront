import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../contexts/Provider';

function Header() {
  const { option } = useContext(AppContext);

  const handleClick = () => {
    if (option === 'LOGIN') {
      history.push('/login');
    } else {
      history.push('/home');
    }
  }

  return(
    <div>
      <img src="" alt="Logo" />
      <button onClick={handleClick}>
        {option}
      </button>
    </div>
  );
}

export default Header;
