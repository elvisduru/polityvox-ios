import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class SubmitButton extends Component {
  render() {
    const { onPress, children, bgColor, gradient, color, marginTop } = this.props;
    return gradient ? (
      <TouchableOpacity onPress={onPress} style={{
        width: '45%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        marginTop
      }}>
        <LinearGradient
          colors={['#FC5C7D', '#6A82FB']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={
            {
              borderRadius: 40,
            }
          }>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 12,
            borderRadius: 40,
          }}>
            <Text style={{ color, fontFamily: 'HelveticaNeue Bold', textTransform: 'uppercase', fontSize: 13 }}>{children}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>

    ) : (
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