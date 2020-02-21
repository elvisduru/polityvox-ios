import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const PerformanceItem = ({amenity, performance}) => (
  <View style={styles.wrapper}>
    <View>
      <Text>{amenity}</Text>
    </View>
    <View style={styles.right}>
      <View style={styles.bar}>
        <View style={[styles.barInner, { width: `${Math.floor(performance / 5 * 100)}%` }]}></View>
      </View>
      <View>
        <Text>{performance.toFixed(1)}</Text>
      </View>
    </View>
  </View>
)


const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '55%'
  },
  bar: {
    backgroundColor: '#d8d8d8',
    width: 150,
    height: 10,
    borderRadius: 2
  },
  barInner: {
    borderRadius: 2,
    backgroundColor: '#7e7e7e',
    height: '100%',
    alignSelf: 'flex-end'
  }
})

export default PerformanceItem;