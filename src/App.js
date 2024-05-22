//import React from 'react';
import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
 // Import useState

import { Authenticator } from '@aws-amplify/ui-react';
import { View, Image, useTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import {
  ShareButton,
  SongCardCollection,
  SongCreateForm
} from './ui-components';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

const components = {
  Header() {
    const { tokens } = useTheme();
    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          src="https://github.com/robbliebob/amplofi3/blob/main/logo.png?raw=true"
        />
      </View>
    );
  },
};

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm); // Toggle showForm state
  };

  const handleFormClose = () => {
    setShowForm(false);
    window.location.reload(); // Reload the page
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <Authenticator socialProviders={['google', 'amazon']}>
        {({ signOut, user }) => (
          <main>
            <components.Header />
            <div style={{ textAlign: 'center', flexGrow: 1 }}>
              <ShareButton onClick={toggleForm}>
                  {showForm ? 'Collaspe Form' : 'Share Song!'}
                </ShareButton>
                {showForm && (
                  <SongCreateForm onSuccess={handleFormClose} />
                )}
              <SongCardCollection />
            </div>
          </main>
        )}
      </Authenticator>
    </div>
  );
}
