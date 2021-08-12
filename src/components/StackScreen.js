import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AddUserPage from '../pages/AddUser';
import AdminPage from '../pages/Adminpage';
import Dashboard from '../pages/Dashboard';
import Mainpage from '../pages/Mainpage';
import PassFailPage from '../pages/PassFail';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Mainpage" component={Mainpage} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Home" component={Mainpage} />
        <Stack.Screen name="Admin" component={AdminPage} />
        <Stack.Screen name="AddUser" component={AddUserPage} />
        <Stack.Screen name="PassFail" component={PassFailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
