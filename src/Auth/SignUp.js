import React, { Component } from 'react'

import { TouchableWithoutFeedback, SafeAreaView, Keyboard, TextInput, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import SubmitButton from '../components/SubmitButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class SignUp extends Component {
  render() {
    state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
    return (
      <KeyboardAwareScrollView>
        <SafeAreaView style={{flex: 1}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.login}>
              <View style={styles.top}>
                <Text style={styles.heading}>Sign Up</Text>
                <View style={styles.form}>
                  <TextInput style={styles.input} placeholder="First Name" autoCompleteType="name" textContentType="name" onChangeText={(text) => this.setState({ firstName: text })} />
                  <TextInput style={styles.input} placeholder="Last Name" autoCompleteType="name" textContentType="name" onChangeText={(text) => this.setState({ lastName: text })} />
                  <TextInput style={styles.input} placeholder="Email Address" autoCompleteType="email" autoCapitalize="none" keyboardType="email-address" textContentType="emailAddress" onChangeText={(text) => this.setState({ email: text })} />
                  <TextInput style={styles.input} placeholder="Password" autoCompleteType="password" textContentType="password" secureTextEntry onChangeText={(text) => this.setState({ password: text })} />
                  <SubmitButton onPress={() => this.props.navigation.navigate('Category')}>Continue</SubmitButton>
                </View>
                <View style={styles.alternatives}>
                  <Text style={{ fontFamily: 'HelveticaNeue', fontSize: 14, marginTop: 25, alignSelf: 'center' }}>Or sign up with</Text>
                  <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button}>
                      <Text style={{ fontFamily: 'HelveticaNeue' }}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                      <Text style={{ fontFamily: 'HelveticaNeue' }}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                      <Text style={{ fontFamily: 'HelveticaNeue' }}>Twitter</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.bottom}>
                <Text style={{ marginBottom: 18, fontFamily: 'HelveticaNeue' }}>Have an account?</Text>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#d5d5d5', width: '100%' }]}
                  onPress={() => this.props.navigation.navigate('SignIn')}
                >
                  <Text style={{ fontFamily: 'HelveticaNeue' }}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  top: {
    backgroundColor: 'white',
    width: '100%',
    padding: 30,
    flex: 7
  },
  bottom: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    width: '100%',
    padding: 30,
    alignItems: 'center'
  },
  heading: {
    fontSize: 40,
    fontFamily: 'HelveticaNeue',
    alignSelf: 'center',
    marginBottom: 30
  },
  input: {
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 2,
    marginBottom: 15,
    fontFamily: 'HelveticaNeue'
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 15
  },
  button: {
    paddingVertical: 15,
    backgroundColor: '#f2f2f2',
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  }
})