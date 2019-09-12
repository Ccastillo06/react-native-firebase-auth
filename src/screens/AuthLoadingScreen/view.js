import React from 'react';
import { ActivityIndicator } from 'react-native';

import ScreenContainer from '../../hocs/ScreenContainer';

export default () => {
  return (
    <ScreenContainer>
      <ActivityIndicator />
    </ScreenContainer>
  );
};
