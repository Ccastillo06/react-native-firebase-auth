import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import styles from './styles';

const LOGIN_TITLE = 'Login with my account';
const REGISTER_TITLE = 'Register a new account';
const SUBMIT = "Let's go! 🚀";
const HAVE_ACCOUNT = 'Have an account? Change to login';
const NEW_ACCOUNT = 'Are you new? Change to register';
const EMAIL_LABEL = 'Your email';
const PASSWORD_LABEL = 'Your password';

export default ({
  isLogin,
  onChangeLogin,
  errorMessage,
  onSubmit,
  password,
  onChangePassword,
  email,
  onChangeEmail,
}) => {
  return (
    <View style={styles.FormContainer}>
      <Text style={styles.FormTitleText}>
        {isLogin ? LOGIN_TITLE : REGISTER_TITLE}
      </Text>

      <View style={styles.InputField}>
        <Text style={styles.InputLabel}>{EMAIL_LABEL}</Text>
        <TextInput
          style={styles.InputText}
          onChangeText={onChangeEmail}
          value={email}
        />
      </View>

      <View style={styles.InputField}>
        <Text style={styles.InputLabel}>{PASSWORD_LABEL}</Text>
        <TextInput
          style={styles.InputText}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
        />
      </View>

      {errorMessage ? (
        <Text style={styles.ErrorMessage}>{errorMessage}</Text>
      ) : null}

      <View style={styles.ChangeButtonContainer}>
        <Button
          onPress={onChangeLogin}
          title={isLogin ? NEW_ACCOUNT : HAVE_ACCOUNT}
        />
      </View>
      <View style={styles.SubmitButtonContainer}>
        <Button color="#fff" onPress={onSubmit} title={SUBMIT} />
      </View>
    </View>
  );
};
