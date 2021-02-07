import React from 'react';
import ProfileForm from '../components/ProfileForm';

function Profile() {
  return (
    <div>
      <img src="/images/egregora-logo.png" alt="Logo" />
      <header>
        <h1>
          Preencha seu perfil para começar!
        </h1>
      </header>
      <img src="" alt="Profile" />
      <ProfileForm />
    </div>
  );
}

export default Profile;
