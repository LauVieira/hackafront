import React, { useEffect, useContext } from 'react';
import { AppContext } from '../contexts/Provider';
import ProfileForm from '../components/ProfileForm';
import Header from '../components/Header';

function Profile() {
  const { setOption } = useContext(AppContext);

  useEffect(() => {
    setOption('HOME');
  }, []);

  return (
    <div>
      <Header />
      <ProfileForm />
    </div>
  );
}

export default Profile;
