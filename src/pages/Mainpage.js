import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Login from './Loginpage';

const Mainpage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Login navigation={navigation} />
      <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Mainpage;
