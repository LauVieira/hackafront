import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const context = {};

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
