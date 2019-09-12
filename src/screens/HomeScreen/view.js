import React from 'react';
import { Text, Button } from 'react-native';

import ScreenContainer from '../../hocs/ScreenContainer';

import styles from './styles';

const DESCRIPTION =
  'You can start working on new routes and screens from here on!';
const LOG_OUT = 'Log out 🚪';

export default ({ onLogout }) => {
  return (
    <ScreenContainer>
      <Text style={styles.Text}>{DESCRIPTION}</Text>
      <Button title={LOG_OUT} onPress={onLogout} />
    </ScreenContainer>
  );
};
