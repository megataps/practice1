import React from 'react';
import SignInScreen from 'containers/SignIn/SignInScreen';
import SignUpScreen from 'containers/SignUp/SignUpScreen';

const routes = {
  getSignInRoute(navigator) {
    return <SignInScreen navigator={navigator} />;
  },
  getSignUpRoute(navigator) {
    return <SignUpScreen navigator={navigator} />;
  }
};

export default routes;

export const listRoutes = [{id: 'signin', title: 'Sign In'},
                {id: 'signup', title: 'Sign Up'}];