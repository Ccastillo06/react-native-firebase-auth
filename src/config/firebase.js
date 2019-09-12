import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_APP_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_MESSAGE_SENDER_ID,
  FIREBASE_DB_URL,
  FIREBASE_STORAGE_BUCKET,
} from 'react-native-dotenv';
import firebase from 'react-native-firebase';

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  appId: FIREBASE_APP_ID,
  projectId: FIREBASE_PROJECT_ID,
  messagingSenderId: FIREBASE_MESSAGE_SENDER_ID,
  databaseURL: FIREBASE_DB_URL,
  storageBucket: FIREBASE_STORAGE_BUCKET,
};

firebase.initializeApp(config);
