import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../contexts/Provider';
import ProfileFilled from '../components/ProfileFilled';
import Header from '../components/Header';

function Profile() {
  const { setOption, users } = useContext(AppContext);
  let chosenUserId = useParams().id;
  chosenUserId = parseInt(chosenUserId, 10);

  const userToDisplay = users.find(
    (user) => user.userDatum.userId === chosenUserId,
  );

  useEffect(() => {
    setOption('HOME');
  }, []);

  return (
    <div>
      <Header />
      <ProfileFilled chosenUser={ userToDisplay } />
    </div>
  );
}

export default Profile;
