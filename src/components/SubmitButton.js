import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class SubmitButton extends Component {
  render() {
    const { onPress, children, bgColor, color } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={{
        width: '45%',
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
      }}>
        <Text style={{ color, fontFamily: 'HelveticaNeue Bold', textTransform: 'uppercase', fontSize: 13 }}>{children}</Text>
      </TouchableOpacity>
    )
  }
}