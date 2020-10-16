/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback
} from 'react-native';
import SubmitButton from '../components/SubmitButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CheckBox from '@react-native-community/checkbox';


export default class SignIn extends Component {
  state = {
    state: '',
    lga: '',
    addSecondary: false
  };

  render() {
    const secondaryForm = this.state.addSecondary ? (
      <View style={styles.secondaryForm}>
        <TextInput style={styles.input} placeholder="State" onChangeText={(text) => this.setState({ state: text })} />
        <TextInput style={styles.input} placeholder="LGA" onChangeText={(text) => this.setState({ LGA: text })} />
      </View>
    ) : null
    return (
      <KeyboardAwareScrollView>
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.wrapper}>
              <Text style={styles.heading}>
                Discover who is responsible for the categories you chose to make changes in, for the LGA you live, work, etc.
              </Text>
              <View style={styles.form}>
                <TextInput style={styles.input} placeholder="State" onChangeText={(text) => this.setState({ state: text })} />
                <TextInput style={styles.input} placeholder="LGA" onChangeText={(text) => this.setState({ LGA: text })} />
              </View>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start' }}>
                <CheckBox
                  value={this.state.addSecondary}
                  onChange={() => this.setState(prevState => ({ addSecondary: !prevState.addSecondary }))}
                />
                <Text>Add a secondary LGA</Text>
              </View>
              {secondaryForm}
              <SubmitButton marginTop={50} gradient color="white" onPress={() => this.props.navigation.navigate('App')}>Continue</SubmitButton>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    paddingHorizontal: 40,
    alignItems: 'center'
  },
  heading: {
    fontSize: 20,
    fontFamily: 'HelveticaNeue Light',
    alignSelf: 'center',
    marginTop: 50,
    paddingHorizontal: 10,
    textAlign: 'center',
    lineHeight: 30,
  },
  form: {
    marginTop: 50,
    flex: 1,
    width: '100%',
  },
  secondaryForm: {
    marginTop: 0,
    flex: 1,
    width: '100%'
  },
  input: {
    padding: 15,
    paddingLeft: 5,
    backgroundColor: 'transparent',
    borderRadius: 2,
    marginBottom: 20,
    fontFamily: 'HelveticaNeue Thin',
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%'
  },
})
