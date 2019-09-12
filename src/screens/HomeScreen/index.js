import React from 'react';

import { onLogout } from '../../services/authentication';
import { AUTH } from '../../constants/routes';

import View from './view';

function HomeScreen({ navigation }) {
  function handleLogout() {
    const successCb = () => navigation.navigate(AUTH);
    onLogout(successCb);
  }

  return <View onLogout={handleLogout} />;
}

// HomeScreen.navigationOptions = authHeader;

export default HomeScreen;
