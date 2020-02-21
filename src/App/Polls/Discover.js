import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Keyboard, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import SubmitButton from '../../components/SubmitButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class Discover extends Component {
  render() {
    state = {
      state: "",
      LGA: ""
    }
    return (
      <KeyboardAwareScrollView>
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.wrapper}>
              <Text style={{textAlign: 'center', paddingHorizontal: 20, marginTop: 30, fontFamily: 'HelveticaNeue Light'}}>
                Would you like to know who is responsible for 
                basic amenities like power, water, roads etc
                where you reside, work or any location
              </Text>
              <View style={styles.form}>
                <TextInput style={styles.input} placeholder="State" onChangeText={(text) => this.setState({ state: text })} />
                <TextInput style={styles.input} placeholder="LGA" onChangeText={(text) => this.setState({ LGA: text })} />
                <SubmitButton onPress={() => this.props.navigation.navigate('Category')}>Search</SubmitButton>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    padding: 20
  },
  form: {
    marginTop: 50
  },
  input: {
    paddingHorizontal: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 2,
    marginBottom: 20,
    fontFamily: 'HelveticaNeue Light'
  }
})
