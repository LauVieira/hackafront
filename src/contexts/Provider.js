import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [option, setOption] = useState('');
  const [career, setCareer] = useState('');
  const [level, setLevel] = useState('');
  const [website, setWebsite] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [description, setDescription] = useState('');
  const [topics, setTopics] = useState('');

  const context = {
    name,
    setName,
    role,
    setRole,
    email,
    setEmail,
    password,
    setPassword,
    option,
    setOption,
    career,
    setCareer,
    level,
    setLevel,
    website,
    setWebsite,
    contactEmail,
    setContactEmail,
    linkedin,
    setLinkedin,
    description,
    setDescription,
    topics,
    setTopics,
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
