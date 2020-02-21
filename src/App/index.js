import {createBottomTabNavigator} from '@react-navigation/native';

import Polls from './Polls';
import Feeds from './Feeds';
import Channels from './Channels';
import Alerts from './Alerts';
import Profile from './Profile';

const AppStack = createBottomTabNavigator({
  Feeds,
  Channels,
  Polls,
  Alerts,
  Profile
}, {
    initialRouteName: 'Polls',
    tabBarOptions: {
      showIcon: false,
      labelStyle: {
        fontSize: 14,
        marginBottom: 16
      },
      activeTintColor: 'black',
      inactiveTintColor: 'rgba(0,0,0,0.2)'
    }
})

export default AppStack;