import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Tab from './Tab';

export default class TabBarWithBackButton extends Component {
  render() {
    const {navigationState, navigation} = this.props; 
    return (
      <View
        style={{
          height: 80,
          backgroundColor: 'red',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
        {navigationState.routes.map((route, index) => (
          <Tab key={index} title={route.routeName} onPress={() => navigation.navigate(route.routeName)} />
        ))}
      </View>
    )
  }
}
