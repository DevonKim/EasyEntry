import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';

import Login from './Components/Login';

const MainNavigator = createStackNavigator({
  Login: {screen: Login}



})

const App = createAppContainer(MainNavigator);

export default App;