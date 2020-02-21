/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import SubmitButton from '../components/SubmitButton';

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
          <View style={styles.form}>
            <TextInput
              placeholderTextColor="#fff"
              style={styles.input}
              placeholder="Email Address"
              autoCompleteType="email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={text => this.setState({email: text})}
            />
            <TextInput
              placeholderTextColor="#fff"
              style={styles.input}
              placeholder="Password"
              autoCompleteType="password"
              textContentType="password"
              secureTextEntry
              onChangeText={text => this.setState({password: text})}
            />
            <SubmitButton
              onPress={() => this.props.navigation.navigate('Category')}>
              Continue
            </SubmitButton>
          </View>
          <View style={styles.alternatives}>
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
              <TouchableOpacity style={styles.button}>
                <Text style={{fontFamily: 'HelveticaNeue'}}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={{fontFamily: 'HelveticaNeue'}}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={{fontFamily: 'HelveticaNeue'}}>Twitter</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    flex: 6,
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
    fontSize: 40,
    fontFamily: 'HelveticaNeue',
    alignSelf: 'flex-start',
    marginBottom: 30,
    color: 'white',
    fontWeight: '300'
    
  },
  input: {
    padding: 15,
    paddingLeft: 0,
    backgroundColor: 'transparent',
    borderRadius: 2,
    marginBottom: 20,
    fontFamily: 'HelveticaNeue',
    color: 'white',
    fontSize: 16
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  button: {
    paddingVertical: 15,
    backgroundColor: '#f2f2f2',
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
