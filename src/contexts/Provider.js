import React from 'react';
import PropTypes from 'prop-types';

const Provider = ({ children }) => {

  const context = {};

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
