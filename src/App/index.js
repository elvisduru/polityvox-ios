import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feeds from './Feeds';
import Discover from './Discover';
import Profile from './Profile';
import Alerts from './Alerts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()

const AppStack = () => (
  <Tab.Navigator
    initialRouteName="Discover"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Feeds') {
          iconName = focused ? 'home' : 'home-outline'
        } else if (route.name === "Discover") {
          iconName = focused ? 'compass' : 'compass-outline'
        } else if (route.name === "Profile") {
          iconName = focused ? 'account' : 'account-outline'
        } else if (route.name === "Alerts") {
          iconName = focused ? 'bell' : 'bell-outline'
        }

        return <Icon name={iconName} size={size} color={color} />
      }
    })}
    tabBarOptions={{
      activeTintColor: '#d941f0',
      inactiveTintColor: '#848385'
    }}
  >
    <Tab.Screen name="Feeds" component={Feeds} />
    <Tab.Screen name="Discover" component={Discover} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Alerts" component={Alerts} />
  </Tab.Navigator>
)

export default AppStack

// import {createBottomTabNavigator} from '@react-navigation/native';

// import Polls from './Polls';
// import Feeds from './Feeds';
// import Channels from './Channels';
// import Alerts from './Alerts';
// import Profile from './Profile';

// const AppStack = createBottomTabNavigator({
//   Feeds,
//   Channels,
//   Polls,
//   Alerts,
//   Profile
// }, {
//     initialRouteName: 'Polls',
//     tabBarOptions: {
//       showIcon: false,
//       labelStyle: {
//         fontSize: 14,
//         marginBottom: 16
//       },
//       activeTintColor: 'black',
//       inactiveTintColor: 'rgba(0,0,0,0.2)'
//     }
// })

// export default AppStack;