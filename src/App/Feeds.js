import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Feeds extends Component {
  render() {
    return (
      <View>
        <Text> Feeds Screen </Text>
        <Icon name="rocket" size={30} color="#333" />
      </View>
    )
  }
}
