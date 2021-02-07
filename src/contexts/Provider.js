import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [option, setOption] = useState('');
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [chosenUser, setChosenUser] = useState({});
  const [category, setCategory] = useState({});

  const header = { headers: { Authorization: `Bearer ${token}` } };

  const context = {
    option,
    setOption,
    user,
    setUser,
    setToken,
    header,
    chosenUser,
    setChosenUser,
    category,
    setCategory,
  };

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider as Provider };

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
