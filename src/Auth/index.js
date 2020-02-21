import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Category from './Category';

const Stack = createStackNavigator()

const AuthStack = () => (
  <Stack.Navigator initialRouteName="SignIn" headerMode="none">
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Category" component={Category} />
  </Stack.Navigator>
)

export default AuthStack;