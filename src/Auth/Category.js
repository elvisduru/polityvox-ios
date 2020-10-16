import React, { Component } from "react";
import { Text, StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import CategoryItem from "../components/CategoryItem";
import SubmitButton from "../components/SubmitButton";
import { ScrollView } from "react-native-gesture-handler";

export default class Category extends Component {
  state = {
    categories: [
      { id: "1", name: "Agriculture", selected: false },
      { id: "2", name: "Arts & Culture", selected: true },
      { id: "3", name: "Child Rights", selected: false },
      { id: "4", name: "Corruption", selected: true },
      { id: "5", name: "Education", selected: false },
      { id: "6", name: "Environment", selected: false },
      { id: "7", name: "Health Care", selected: false },
      { id: "8", name: "Human Rights", selected: false },
      { id: "9", name: "Housing", selected: false },
      { id: "10", name: "Judiciary", selected: false },
      { id: "11", name: "Land", selected: false },
      { id: "12", name: "Security", selected: false },
      { id: "13", name: "Law Enforcement", selected: false },
      { id: "14", name: "Energy", selected: false },
      { id: "15", name: "Roads", selected: false },
      { id: "16", name: "Research", selected: false },
      { id: "17", name: "Sports", selected: false },
      { id: "18", name: "Transport", selected: false },
      { id: "19", name: "Voting Rights", selected: false },
      { id: "20", name: "Water Resources", selected: false },
      { id: "21", name: "Women's Rights", selected: false },
    ]
  };

  handleSelection = (id) => {
    const categories = [...this.state.categories];
    var foundItem = categories.findIndex(item => item.id === id);
    categories[foundItem].selected = !categories[foundItem].selected;
    this.setState({ categories })
  }

  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          <Text style={styles.heading}>Select the areas you would like to make a change</Text>
          <View style={styles.categories}>
            {this.state.categories.map(({ name, selected, id }, index) => (
              <CategoryItem key={index} id={id} name={name} selected={selected} onPress={() => this.handleSelection(id)} />
            ))}
          </View>
          <SubmitButton gradient color="#fff" onPress={() => this.props.navigation.navigate('Discover')}>Continue</SubmitButton>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: 'HelveticaNeue Light',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 10,
    textAlign: 'center',
    lineHeight: 30,
  },
  wrapper: {
    paddingVertical: 30,
    paddingHorizontal: 30,
    flex: 1,
    alignItems: 'center'
  },
  categories: {
    width: "100%",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 40
  }
});
