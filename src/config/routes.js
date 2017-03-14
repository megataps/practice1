import React from 'react';
import SignInScreen from 'containers/SignIn/SignInScreen';
import SignUpScreen from 'containers/SignUp/SignUpScreen';
import MainScreen from 'containers/Main/MainScreen';

const routes = {
  getSignInRoute(navigator) {
    return <SignInScreen navigator={navigator} />;
  },
  getSignUpRoute(navigator) {
    return <SignUpScreen navigator={navigator} />;
  },

  getMainRoute(navigator){
    return <MainScreen navigator={navigator} />;
  },

};

export default routes;

export const listRoutes = [
  { id: 'signin', title: 'Sign In' },
  { id: 'signup', title: 'Sign Up' },
  { id: 'main', title: 'Main' },
];