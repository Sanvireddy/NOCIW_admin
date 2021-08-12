/* eslint-disable react-native/no-inline-styles */
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import AddUserPage from './AddUser';
import AdminPage from './Adminpage';
import PassFailPage from './PassFail';
function Admin({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('AdminPage')}
        title="Go to admin page"
      />
    </View>
  );
}
function AddUser({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('AddUser')}
        title="Go to AddUser page"
      />
    </View>
  );
}
function PassFail({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('PassFail')}
        title="Go to PassFail page"
      />
    </View>
  );
}

function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.navigate('Mainpage')} />
    </View>
  );
}
const Drawer = createDrawerNavigator();

export default function Dashboard({navigation}) {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Admin" component={AdminPage} />
        <Drawer.Screen name="AddUser" component={AddUserPage} />
        <Drawer.Screen name="PassFail" component={PassFailPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
