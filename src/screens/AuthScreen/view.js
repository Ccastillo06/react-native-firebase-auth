import React from 'react';
import { Text } from 'react-native';

import { GoogleSigninButton } from 'react-native-google-signin';

import ScreenContainer from '../../hocs/ScreenContainer';
import AuthForm from '../../components/AuthForm';

import styles from './styles';

const MAIN_TITLE = 'We are integrated with firebase! 🔥';
const AUTH_TITLE = 'Please, authenticate before continuing...';
const GOOGLE_OPTION = 'You can also sign in using Google';

export default ({ errorMessage, onRegister, onLogin, onGoogleSignIn }) => {
  return (
    <ScreenContainer>
      <Text style={styles.TitleText}>{MAIN_TITLE}</Text>
      <Text style={styles.SubtitleText}>{AUTH_TITLE}</Text>

      <AuthForm onLogin={onLogin} onRegister={onRegister} />

      {errorMessage ? (
        <Text style={styles.ErrorMessage}>{errorMessage}</Text>
      ) : null}

      <Text style={styles.SubtitleText}>{GOOGLE_OPTION}</Text>
      <GoogleSigninButton
        style={styles.GoogleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onGoogleSignIn}
      />
    </ScreenContainer>
  );
};
