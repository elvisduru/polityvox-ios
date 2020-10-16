import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import LeaderBoard from './LeaderBoard';

const Stack = createStackNavigator();

const DiscoverStack = () => (
  <Stack.Navigator initialRouteName="LeaderBoard" headerMode="none">
    <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
  </Stack.Navigator>
)

export default DiscoverStack

// export default class Discover extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Discover Route</Text>
//       </View>
//     )
//   }
// }
