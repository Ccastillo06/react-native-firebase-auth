import {
  GOOGLE_WEB_CLIENT_ID,
  GOOGLE_IOS_CLIENT_ID,
} from 'react-native-dotenv';

import { GoogleSignin } from 'react-native-google-signin';

// These are the public ids to access our Google Signin configuration.
GoogleSignin.configure({
  scopes: [],
  webClientId: GOOGLE_WEB_CLIENT_ID,
  iosClientId: GOOGLE_IOS_CLIENT_ID,
});
