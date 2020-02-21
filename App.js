import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './src/Auth';
// import AppStack from './src/App';

const Stack = createStackNavigator();

// const AppNavigator = createAppContainer(
//   createSwitchNavigator(
//     {
//       Auth: AuthStack,
//       App: AppStack,
//     },
//     {
//       initialRouteName: 'Auth',
//     },
//   ),
// );

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Auth" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
