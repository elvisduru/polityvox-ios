import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import LGACard from '../../components/LGACard';

export default class LeaderBoard extends Component {
  state = {
    LGAs: [1,2,3]
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <Text style={{
            fontFamily: 'HelveticaNeue',
            fontSize: 16
          }}>Top performing locations</Text>
          <Text style={{
            fontFamily: 'HelveticaNeue Light',
            marginTop: 5
          }}>The statistics are based on user ratings</Text>
        </View>
        <ScrollView style={{flex: 1, marginTop: 21}}>
          {
            this.state.LGAs.map((LGA, index) => (
              <LGACard key={index} {...this.props} />
            ))
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    padding: 20
  },
})
