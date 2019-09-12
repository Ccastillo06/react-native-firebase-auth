import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import { AUTH_LOADING } from './src/constants/routes';

import './src/config/firebase';
import './src/config/google';

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthScreen,
    },
    {
      initialRouteName: AUTH_LOADING,
    },
  ),
);

export default AppContainer;
