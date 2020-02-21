import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class Reviews extends Component {
  render() {
    return (
      <View>
        <Text> Reviews Screen </Text>
        <Button
          title="Write Review"
          onPress={() => this.props.navigation.navigate('Review')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
