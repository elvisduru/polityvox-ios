import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class SubmitButton extends Component {
  render() {
    const {onPress, children} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={{
        width: '100%',
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 2
      }}>
        <Text style={{color: '#fff', fontFamily: 'HelveticaNeue'}}>{children}</Text>
      </TouchableOpacity>
    )
  }
}