import React, { useEffect } from 'react';

import { getCurrentUser } from '../../services/authentication';
import { AUTH, HOME } from '../../constants/routes';

import View from './view';

function AuthLoadingScreen({ navigation }) {
  useEffect(() => {
    /**
     * Check if a logged in user exists in the app session and
     * redirect to Home if the user is logged in or
     * redirect to Auth to make the user log in or sign up.
     */
    function redirectUser() {
      getCurrentUser() ? navigation.navigate(HOME) : navigation.navigate(AUTH);
    }

    redirectUser();
  }, [navigation]);

  return <View />;
}

export default AuthLoadingScreen;
