import React from 'react';
import SignInScreen from 'containers/SignIn/SignInScreen';
import SignUpScreen from 'containers/SignUp/SignUpScreen';
import MainScreen from 'containers/Main/MainScreen';
import HomeScreen from 'containers/Home/HomeScreen';
import UserProfileScreen from 'containers/Profile/UserProfileScreen';

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

  getHomeRoute(navigator){
    return <HomeScreen navigator={navigator} />;
  },

  getUserProfileRoute(navigator) {
    return <UserProfileScreen navigator={navigator} />;
  }
};

export default routes;

export const listRoutes = [
  { id: 'signin', title: 'Sign In' },
  { id: 'signup', title: 'Sign Up' },
  { id: 'main', title: 'Main' },
  { id: 'home', title: 'Home' },
  { id: 'userprofile', title: 'User Profile' },
];