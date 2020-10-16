import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

export default class CategoryItem extends Component {

  rotate = () => {
    this.item.rotate(360).then(endState => console.log(endState.finished ? 'Rotation finished' : 'Rotation cancelled'))
  }

  render() {
    const { name, selected, onPress } = this.props;
    return (
      <TouchableOpacity onPress={() => {
        onPress()
        this.rotate()
      }} style={{ margin: 10 }}>
        <Animatable.View ref={node => this.item = node}>

          <LinearGradient
            colors={['#FC5C7D', '#6A82FB']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={
              {
                borderRadius: 50,
              }
            }>
            <View
              style={{
                backgroundColor: `${selected ? 'transparent' : 'white'}`,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                width: 80,
                height: 80,
                borderRadius: 50,
                margin: 1
              }}>
              <Text
                style={{
                  color: `${selected ? 'white' : 'black'}`,
                  textAlign: 'center',
                  paddingHorizontal: 5,
                  fontSize: 12
                }}>
                {name}
              </Text>
            </View>
          </LinearGradient>
        </Animatable.View>

      </TouchableOpacity>
    );
  }
}
