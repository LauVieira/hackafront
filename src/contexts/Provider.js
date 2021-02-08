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
  const [photo, setPhoto] = useState('');
  const [users, setUsers] = useState([]);

  const fetchUserData = (user) => {
    const { userDatum } = user;
    setName(user.name);
    setContactEmail(userDatum.contactEmail);
    setCareer('Front-End');
    setLevel(userDatum.level);
    setDescription(userDatum.description);
    setTopics(userDatum.topics);
    setRole(user.role);
    setPhoto(userDatum.photo);
    setLinkedin(userDatum.linkedin);
    setWebsite(userDatum.website);
  };

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
    photo,
    setPhoto,
    users,
    setUsers,
    fetchUserData,
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
