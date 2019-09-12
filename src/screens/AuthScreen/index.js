import React, { useEffect, useState } from 'react';
import firebase from 'react-native-firebase';

import {
  onRegister,
  onLogin,
  onGoogleSignIn,
} from '../../services/authentication';
import { HOME } from '../../constants/routes';

import View from './view';

function AuthScreen({ navigation }) {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate(HOME);
      }
    });
  }, [navigation]);

  function handleErrorMessage(message) {
    setErrorMessage(message);
  }

  function handleRegister(email, password) {
    onRegister(email, password)(handleErrorMessage);
  }

  function handleLogin(email, password) {
    onLogin(email, password)(handleErrorMessage);
  }

  function handleGoogleSignIn() {
    onGoogleSignIn()(handleErrorMessage);
  }

  return (
    <View
      errorMessage={errorMessage}
      onRegister={handleRegister}
      onLogin={handleLogin}
      onGoogleSignIn={handleGoogleSignIn}
    />
  );
}

export default AuthScreen;
