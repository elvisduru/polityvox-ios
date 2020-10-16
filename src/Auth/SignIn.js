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
import twitterIcon from '../images/twitter.png'
import logo from '../images/logo.png'

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <View style={styles.login}>
        <View style={styles.top}>
          <Image source={logo} style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20 }} />
          <Text style={styles.heading}>Login</Text>
          <View style={{ width: 38, marginBottom: 30, height: 2, backgroundColor: '#fff' }} />
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
            <Text style={{ alignSelf: 'flex-end', color: '#fff', fontFamily: 'HelveticaNeue Light' }}>Forgot Password?</Text>
          </View>
        </View>
        <View style={styles.alternatives}>
          <ImageBackground source={vectorbg} style={{ flex: 1, width: '100%', height: '100%' }}>
            <View style={styles.authBtns}>
              <SubmitButton
                bgColor="white"
                color="#333"
                onPress={() => this.props.navigation.navigate('SignUp')}>
                SignUp
            </SubmitButton>
              <SubmitButton
                gradient
                color="#fff"
                onPress={() => this.props.navigation.navigate('App')}>
                Login
            </SubmitButton>
            </View>
            <Text
              style={{
                fontFamily: 'HelveticaNeue Thin',
                fontSize: 14,
                marginTop: 10,
                alignSelf: 'center',
              }}>
              Or login with
            </Text>
            <View style={styles.buttons}>
              <TouchableOpacity style={{ marginRight: 40, borderWidth: 1, borderColor: '#eee', padding: 14, borderRadius: 10 }}>
                <Image source={googleIcon} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ borderWidth: 1, borderColor: '#eee', padding: 14, borderRadius: 10 }}>
                <Image source={twitterIcon} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
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
    backgroundColor: '#195DC4'
  },
  top: {
    width: '100%',
    padding: 40
    // flex: 1,
  },
  alternatives: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  heading: {
    fontSize: 28,
    fontFamily: 'HelveticaNeue Light',
    alignSelf: 'flex-start',
    marginBottom: 15,
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
    justifyContent: 'center',
    marginTop: 20,
  },
  authBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 10
  }
});
