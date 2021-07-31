import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Form from '../components/Form';
import Logo from '../components/Logo';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form type="Login" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});
