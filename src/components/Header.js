import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
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
    <StyledHeader>
      <img src="" alt="Logo" />
      <button type="button" onClick={ handleClick }>
        {option}
      </button>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  padding: 5%;
  position: relative;
  top: 0px;
  width: 100%;
`;
