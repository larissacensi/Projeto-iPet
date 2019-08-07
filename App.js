import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View } from 'react-native';
import styles from './config/styles';
import Home from './screens/Home';

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

