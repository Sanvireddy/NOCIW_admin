/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Login from './src/pages/Loginpage';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
