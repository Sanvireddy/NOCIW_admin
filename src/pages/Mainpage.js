import React, {Component} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Login from './Loginpage';

export default class Mainpage extends Component {
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
