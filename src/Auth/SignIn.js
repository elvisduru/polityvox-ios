/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image
} from 'react-native';
import SubmitButton from '../components/SubmitButton';

import vectorbg from '../images/vectorbg.png'
import googleIcon from '../images/google-icon.png'

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <View style={styles.login}>
        <View style={styles.top}>
          <Text style={styles.heading}>Login</Text>
          <View style={{ width: 38, marginBottom: 40, height: 2, backgroundColor: '#fff' }} />
          <View style={styles.form}>
            <TextInput
              placeholderTextColor="#fff"
              style={styles.input}
              placeholder="Email Address"
              autoCompleteType="email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={text => this.setState({ email: text })}
            />
            <TextInput
              placeholderTextColor="#fff"
              style={styles.input}
              placeholder="Password"
              autoCompleteType="password"
              textContentType="password"
              secureTextEntry
              onChangeText={text => this.setState({ password: text })}
            />
          </View>
        </View>
        <View style={styles.alternatives}>
          <ImageBackground source={vectorbg} style={{ flex: 1, width: '100%', height: '100%' }}>
            <View style={styles.authBtns}>
              <SubmitButton
                bgColor="white"
                color="#333"
                onPress={() => this.props.navigation.navigate('Category')}>
                SignUp
            </SubmitButton>
              <SubmitButton
                bgColor="black"
                color="#fff"
                onPress={() => this.props.navigation.navigate('Category')}>
                Login
            </SubmitButton>
            </View>
            <Text
              style={{
                fontFamily: 'HelveticaNeue',
                fontSize: 14,
                marginTop: 25,
                alignSelf: 'center',
              }}>
              Or login with
            </Text>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.googleBtn}>
                <Image source={googleIcon} style={{ width: '20%', height: '80%' }} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        {/* <View style={styles.bottom}>
          <Text style={{marginBottom: 18, fontFamily: 'HelveticaNeue'}}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#d5d5d5', width: '100%'}]}
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={{fontFamily: 'HelveticaNeue'}}>Sign Up</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingTop: 100,
    backgroundColor: '#195DC4'
  },
  top: {
    width: '100%',
    padding: 40,
    // flex: 1,
  },
  alternatives: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  bottom: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    width: '100%',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    fontFamily: 'HelveticaNeue Light',
    alignSelf: 'flex-start',
    marginBottom: 18,
    color: 'white',
  },
  input: {
    padding: 15,
    paddingLeft: 0,
    backgroundColor: 'transparent',
    borderRadius: 2,
    marginBottom: 20,
    fontFamily: 'HelveticaNeue Thin',
    color: 'white',
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  googleBtn: {
    backgroundColor: '#fff',
    width: 140,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  authBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 10
  }
});
