import React, { FC, useState } from "react";
import { SafeAreaView, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from '../../components/Header';
import database from '../../../dbrecipes.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 80,
    marginVertical: 20,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

const DATA = [
  {
     
    id: "1",
    title: JSON.stringify(database[2], ['name'])

  },
  {
    id: "2",
    title: "test",
  },
  {
    id: "3",
    title: "cucumber soup",
  },
  {
    id: "4",
    title: "chicken soup",
  },
  {
    id: "5",
    title: "Greek style chicken",
  },
  {
    id: "6",
    title: "chinese soup",
  },
  {
    id: "7",
    title: "Silesian noodles",
  }
];


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={() => alert('tu będzie przepis i opis')} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';
    

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
          <Header title="RecipeApp" />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};  


export default App