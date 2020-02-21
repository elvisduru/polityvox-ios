import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class LGACard extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}><Text onPress={() => this.props.navigation.navigate('About')} style={styles.heading}>Eti-Osa Local Government</Text></View>
        <View style={styles.middle}>
          <Text style={{flexBasis: '33.3%'}}>Education - 4.0</Text>
          <Text style={{flexBasis: '33.3%'}}>Electricity - 4.0</Text>
          <Text style={{flexBasis: '33.3%'}}>Health - 4.0</Text>
          <Text style={{flexBasis: '33.3%'}}>Roads - 4.0</Text>
          <Text style={{flexBasis: '33.3%'}}>Security - 4.0</Text>
          <Text style={{flexBasis: '33.3%'}}>Employment - 4.0</Text>
          <Text style={{flexBasis: '33.3%'}}>Water - 4.0</Text>
          <Text style={{flexBasis: '33.3%'}}>Housing - 4.0</Text>
        </View>
        <View style={styles.bottom}>
          <ScrollView horizontal>
            <View style={styles.card}>
              <Text style={{fontFamily: 'HelveticaNeue Light'}}>Shuaibu{'\n'}Ajayi{'\n'}Chairman</Text>
            </View>
            <View style={styles.card}>
              <Text style={{fontFamily: 'HelveticaNeue Light'}}>Firstname{'\n'}Lastname{'\n'}Designation</Text>
            </View>
            <View style={styles.card}>
              <Text style={{fontFamily: 'HelveticaNeue Light'}}>Firstname{'\n'}Lastname{'\n'}Designation</Text>
            </View>
            <View style={styles.card}>
              <Text style={{fontFamily: 'HelveticaNeue Light'}}>Firstname{'\n'}Lastname{'\n'}Designation</Text>
            </View>
            <View style={styles.card}>
              <Text style={{fontFamily: 'HelveticaNeue Light'}}>Firstname{'\n'}Lastname{'\n'}Designation</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  header: {
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  heading: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue'
  },
  middle: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
  },
  bottom: {
    flex: 3,
    paddingVertical: 10,
    paddingLeft: 10
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: '#ebebeb',
    borderRadius: 6,
    padding: 10,
    marginRight: 10
  }
})
