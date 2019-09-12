import React, { useState } from 'react';

import { isValidPassword, isValidEmail } from '../../utils/validators';

import View from './view';

const INVALID_EMAIL = 'A valid email is required "myemail@email.com"';
const INVALID_PASSWORD =
  'A valid password is required (8 characters, upper and lowercase letters and a number)';

function AuthForm({ onLogin, onRegister }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleChangeLogin() {
    setIsLogin(!isLogin);
  }

  function onChangeEmail(text) {
    setEmail(text.trim());
  }

  function onChangePassword(text) {
    setPassword(text.trim());
  }

  function handleSubmit() {
    if (!email || !isValidEmail(email)) {
      setErrorMessage(INVALID_EMAIL);
    }

    if (!password || !isValidPassword(password)) {
      setErrorMessage(INVALID_PASSWORD);
    }

    const method = isLogin ? onLogin : onRegister;
    method(email, password);
  }

  return (
    <View
      isLogin={isLogin}
      onChangeLogin={handleChangeLogin}
      errorMessage={errorMessage}
      onSubmit={handleSubmit}
      password={password}
      onChangePassword={onChangePassword}
      email={email}
      onChangeEmail={onChangeEmail}
    />
  );
}

export default AuthForm;
