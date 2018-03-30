import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './src/LoginScreen'
import HomeScreen from './src/HomeScreen'
import AYB from './src/ayb/aybLayout'

import {
  KafaOmurga,
  Hayvanlar,
  Zehirlenmeler
} from './src/InfoPages'

const FirstAidApp = StackNavigator({
  Login: {screen: LoginScreen},
  Home: { screen: HomeScreen },
  AYB: { screen: AYB},
  KafaOmurga: {screen: KafaOmurga},
  Hayvanlar : {screen: Hayvanlar},
  Zehirlenmeler: {screen: Zehirlenmeler}

});

export default class App extends React.Component {

  render() {
    return (
      <FirstAidApp />
    )
  }
}




