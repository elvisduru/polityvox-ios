import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default class CategoryItem extends Component {

  _select

  render() {
    const {name, selected, onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={{
        backgroundColor: `${selected ? '#a9a9a9' : '#f2f2f2'}`,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 2,
        marginVertical: 10
      }}>
        <Text style={{
          color: `${selected ? '#fff' : '#000'}`
        }}>{name}</Text>
      </TouchableOpacity>
    )
  }
}