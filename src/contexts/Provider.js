import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = {
    email,
    setEmail,
    password,
    setPassword,
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
