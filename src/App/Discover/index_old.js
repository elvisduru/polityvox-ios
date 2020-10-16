import React from 'react';
import {View, Image} from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator, MaterialTopTabBar, HeaderBackButton } from '@react-navigation/native';

import Discover from './Discover';
import LeaderBoard from './LeaderBoard';
import About from './About';
import Reviews from './Reviews';
import Review from './Review';

import searchIcon from '../../../src/images/magnifier.png';

const ReviewsNavigator = createMaterialTopTabNavigator({
  Electricity: Reviews,
  Water: Reviews,
  Education: Reviews,
  Roads: Reviews  
}, {
  initialRouteName: 'Electricity',
  tabBarOptions: {
    scrollEnabled: true,
    style: {
      backgroundColor: 'white',
    },
    labelStyle: {
      color: 'black'
    },
    indicatorStyle: {
      backgroundColor: '#000'
    }
  }
})

const DiscoverNavigator = createMaterialTopTabNavigator({
  About: {
    screen: About
  },
  Reviews: ReviewsNavigator
}, {
  tabBarComponent: props => {
    return (
      <View style={{ flexDirection: 'row', flex: 0, alignItems: 'center', height: 50, width: '100%', backgroundColor: '#f2f2f2'}} >
        <HeaderBackButton onPress={() => props.navigation.goBack()} style={{flex: 0, backgroundColor: '#f2f2f2'}} />
        <MaterialTopTabBar {...props} activeTintColor="black" inactiveTintColor="rgba(0,0,0,0.2)" style={{ flex: 1, backgroundColor: '#f2f2f2', elevation: 0, fontWeight: 900}}/>
      </View>
    )
  }, 
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    indicatorStyle: {
      backgroundColor: 'black'
    },
    tabStyle: {
      flex: 1,
    },
    labelStyle: {
      fontWeight: 'bold',
      fontSize: 14
    }
  }
})

const PollNavigator = createMaterialTopTabNavigator({
  LeaderBoard,
  Discover: {
    screen: Discover,
    navigationOptions: {
      tabBarIcon: ({focused, horizontal, tintColor}) => (
        <View style={{ marginLeft: 40 }}>
          <Image
            source={searchIcon}
            width={30}
            height={30}
          />
        </View>
      )
    }
  },
}, {
  initialRouteName: 'Discover',
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    showIcon: true,
    tabStyle: {
      flex: 1,
      flexDirection: "row-reverse",
    },
    indicatorStyle: {
      backgroundColor: 'black'
    },
    labelStyle: {
      fontWeight: 'bold', 
      fontSize: 14,
    },
    style: {
      backgroundColor: "#f2f2f2"
    },
    activeTintColor: "black",
    inactiveTintColor: "rgba(0,0,0,0.2)"
  }
})

const Polls = createStackNavigator({
  PollNavigator, 
  DiscoverNavigator,
  Review: {
    screen: Review,
    navigationOptions: {
      title: "Rate & Review",
      headerTitle: "Rate & Review"
    }
  }
})

export default Polls;