import React, { useEffect, useContext } from 'react';
import { AppContext } from '../contexts/Provider';
import ProfileFilled from '../components/ProfileFilled';
import Header from '../components/Header';

function Profile() {
  const { setOption } = useContext(AppContext);

  useEffect(() => {
    setOption('HOME');
  }, []);

  return (
    <div>
      <Header />
      <ProfileFilled />
    </div>
  );
}

export default Profile;
