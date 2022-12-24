import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './Login';
import Signup from './Signup';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
