import React, { Component } from 'react';

import {
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import SubmitButton from '../components/SubmitButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import vectorbg from '../images/vectorbg.png';
import googleIcon from '../images/google-icon.png';
import twitterIcon from '../images/twitter.png';
import logo from '../images/logo.png';

export default class SignUp extends Component {
  render() {
    state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
    return (
      <KeyboardAwareScrollView>
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.login}>
              <View style={styles.top}>
                <Image source={logo} style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20 }} />
                <Text style={styles.heading}>Sign Up</Text>
                <View
                  style={{
                    width: 38,
                    marginBottom: 40,
                    height: 2,
                    backgroundColor: '#fff',
                  }}
                />
                <View style={styles.form}>
                  <TextInput
                    style={styles.input}
                    placeholderTextColor="#fff"
                    placeholder="First Name"
                    autoCompleteType="name"
                    textContentType="name"
                    onChangeText={text => this.setState({ firstName: text })}
                  />
                  <TextInput
                    style={styles.input}
                    placeholderTextColor="#fff"
                    placeholder="Last Name"
                    autoCompleteType="name"
                    textContentType="name"
                    onChangeText={text => this.setState({ lastName: text })}
                  />

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

                <View style={styles.authBtns}>
                  <SubmitButton
                    bgColor="white"
                    color="#333"
                    onPress={() =>
                      this.props.navigation.navigate('Category')
                    }>
                    SignUp
                    </SubmitButton>
                </View>
                <View style={{ backgroundColor: '#ffffff', padding: 20 }}>
                  <Text
                    style={{
                      fontFamily: 'HelveticaNeue Thin',
                      fontSize: 14,
                      marginTop: 10,
                      alignSelf: 'center',
                    }}>
                    Or Sign up with
                  </Text>
                  <View style={styles.buttons}>
                    <TouchableOpacity
                      style={{
                        marginRight: 40,
                        borderWidth: 1,
                        borderColor: '#eee',
                        padding: 14,
                        borderRadius: 10,
                      }}>
                      <Image
                        source={googleIcon}
                        style={{ width: 20, height: 20 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        borderWidth: 1,
                        borderColor: '#eee',
                        padding: 14,
                        borderRadius: 10,
                      }}>
                      <Image
                        source={twitterIcon}
                        style={{ width: 20, height: 20 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ marginTop: 20, backgroundColor: '#ffffff', flex: 1, flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                    <Text style={{ color: '#BACBD9' }}>Already have an account? </Text>
                    <Text onPress={() => this.props.navigation.navigate('SignIn')} style={{ fontFamily: 'Helvetica Neu Bold', fontWeight: '900', color: '#8C9298' }}>Sign In</Text>
                  </View>
                </View>

              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    backgroundColor: '#195DC4',
  },
  top: {
    width: '100%',
    padding: 40,
    paddingBottom: 20
    // flex: 1,
  },
  alternatives: {
    flex: 1,
    width: '100%',
    height: '100%',
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
    marginBottom: 10,
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
    justifyContent: 'center',
    padding: 20,
    paddingTop: 0,
  },
});
