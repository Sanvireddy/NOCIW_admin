import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 60, height: 80}}
          source={require('../img/images.png')}
        />
        <Text style={styles.logoText}>Welcome to NOCIW</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(255,255,255,0.7)',
  },
});
