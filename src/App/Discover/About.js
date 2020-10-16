import React, { Component } from 'react'
import { Text, StyleSheet, ScrollView, View } from 'react-native'
import PerformanceItem from '../../components/PerformanceItem';

export default class About extends Component {
  state = {
    performanceList: [
      {amenity: 'Electricity', performance: 1.0},
      {amenity: 'Water', performance: 4.0},
      {amenity: 'Education', performance: 2.5},
      {amenity: 'Roads', performance: 1.0},
      {amenity: 'Employment', performance: 3.7},
      {amenity: 'Housing', performance: 2.0},
    ]
  }
  render() {
    const performanceList = this.state.performanceList.map(({amenity, performance}, index) => (
      <PerformanceItem amenity={amenity} performance={performance} key={index} />
    ))
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.info}>
          <Text style={styles.heading}>Eti-Osa Local Government</Text>
          <Text style={styles.paragraph}>
            Eti-Osa is a Local Government Area of Lagos State in Nigeria. Lagos State Government administers the council area as Ikoyi-Obalande LCDA, Eti-Osa East LCDA, and Iru Victoria Island LCDA. Within Eti-Osa are several important areas of Lagos State, including Lagos' Victoria Island and Lekki's port. Before the Nigerian capital moved to Abuja, Eti-Osa Local Government Area served alongside Lagos Island Local Government Area as the seat of the national capital.
          </Text>
          <View style={styles.location}>
            <Text style={styles.smallHeading}>Local Government Office</Text>
            <Text style={styles.paragraph}>5th Floor, MUlliner Towers, 39 Alfred Rewane Road, Ikoyi, 39, Lagos</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.smallHeading}>Basic Amenities Performance</Text>
          {performanceList}
        </View>
        <View style={styles.container}>
          <Text style={styles.smallHeading}>Government</Text>

        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  info: {
    padding: 20,
    paddingBottom: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8'
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8'
  },
  heading: {
    fontSize: 25,
    fontFamily: 'HelveticaNeue',
    marginBottom: 15
  },
  paragraph: {
    fontFamily: 'HelveticaNeue Light',
    fontSize: 15,
    lineHeight: 18
  },
  location: {
    marginTop: 50
  },
  smallHeading: {
    fontSize: 17,
    fontFamily: 'HelveticaNeue',
    marginBottom: 5
  }
})
