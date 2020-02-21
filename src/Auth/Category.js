import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import CategoryItem from "../components/CategoryItem";
import SubmitButton from "../components/SubmitButton";

export default class Category extends Component {
  state = {
    categories: [
      { id: "1", name: "Education", selected: false },
      { id: "2", name: "Security", selected: true },
      { id: "3", name: "Health", selected: false },
      { id: "4", name: "Education", selected: true },
      { id: "5", name: "Security", selected: false },
      { id: "6", name: "Health", selected: false },
      { id: "7", name: "Education", selected: false },
      { id: "8", name: "Security", selected: false },
      { id: "9", name: "Health", selected: true },
    ]
  };

  handleSelection = (id) => {
    const categories = [...this.state.categories];
    var foundItem = categories.findIndex(item => item.id === id);
    categories[foundItem].selected = !categories[foundItem].selected;
    this.setState({categories})
  }

  render() {
    return (
    <View style={styles.wrapper}>
        <Text style={styles.heading}>Select an area of Interest</Text>
        <View style={styles.categories}>
          {this.state.categories.map(({name, selected, id}, index) => (
            <CategoryItem key={index} id={id} name={name} selected={selected} onPress={() => this.handleSelection(id)} />
          ))}
        </View>
        <SubmitButton onPress={() => this.props.navigation.navigate('Polls')}>Continue</SubmitButton>        
    </View>
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontFamily: 'HelveticaNeue',
    alignSelf: 'center',
    marginBottom: 30,
    paddingHorizontal: 50,
    textAlign: 'center',
  },
  wrapper: {
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  categories: {
    width: "100%",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 15
  }
});
