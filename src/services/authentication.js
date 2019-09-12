import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';

export const getCurrentUser = () => firebase.auth().currentUser;

export const onRegister = (email, password) => errorCb => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => errorCb(error.message));
};

export const onLogin = (email, password) => errorCb => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => errorCb(error.message));
};

export const onLogout = successCb => {
  return firebase
    .auth()
    .signOut()
    .then(successCb)
    .catch(error => console.log(error.message));
};

export const onGoogleSignIn = () => async errorCb => {
  try {
    const data = await GoogleSignin.signIn();

    const credential = firebase.auth.GoogleAuthProvider.credential(
      data.idToken,
      data.accessToken,
    );

    await firebase.auth().signInWithCredential(credential);

    return;
  } catch (error) {
    errorCb(error.message);
  }
};
