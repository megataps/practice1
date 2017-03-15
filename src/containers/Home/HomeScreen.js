//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, PullToRefreshViewAndroid } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import UserListScreen from 'UserList/UserListScreen';

// create a component
class HomeScreen extends Component {
    render() {
        return (
            <UserListScreen
                key="userListScreen" />
        );
    }
}

//make this component available to the app
export default HomeScreen;
