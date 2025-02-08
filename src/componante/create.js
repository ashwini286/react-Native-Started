import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Create = () => {
  const [toys, setToys] = useState([]);
  const [newToy, setNewToy] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const loadToys = async () => {
      try {
        const savedToys = await AsyncStorage.getItem("toys");
        if (savedToys) {
          setToys(JSON.parse(savedToys));
        }
      } catch (error) {
        console.error("Failed to load toys:", error);
      }
    };
    loadToys();
  }, []);

  useEffect(() => {
    const saveToys = async () => {
      try {
        await AsyncStorage.setItem("toys", JSON.stringify(toys));
      } catch (error) {
        console.error("Failed to save toys:", error);
      }
    };
    saveToys();
  }, [toys]);

  const handleAddToy = () => {
    if (newToy.trim() && newPrice.trim()) {
      if (editingId !== null) {
        // Update existing toy
        setToys(
          toys.map((toy) =>
            toy.id === editingId
              ? { ...toy, name: newToy, price: newPrice }
              : toy
          )
        );
        setEditingId(null);
      } else {
        // Add new toy
        setToys([...toys, { id: Date.now(), name: newToy, price: newPrice }]);
      }
      setNewToy("");
      setNewPrice("");
    }
  };

  const handleDeleteToy = (id) => {
    Alert.alert("Are you sure you want to delete this item?");
    setToys(toys.filter((toy) => toy.id !== id));
  };

  const handleEditToy = (id) => {
    const toy = toys.find((t) => t.id === id);
    setNewToy(toy.name);
    setNewPrice(toy.price);
    setEditingId(id);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "left",
          fontWeight: "bold",
          fontSize: 20,
          paddingLeft: 5,
        }}
      >
        Create Items
      </Text>

      {/* Toy Name Input */}
      <TextInput
        style={styles.title}
        placeholder="Enter Toy Name"
        value={newToy}
        onChangeText={setNewToy}
        placeholderTextColor="black"
      />

      {/* Price Input */}
      <TextInput
        style={styles.title1}
        placeholder="Enter Stock count"
        value={newPrice}
        onChangeText={setNewPrice}
        keyboardType="numeric"
        placeholderTextColor="black"
      />

      {/* Add/Update Button */}
      <TouchableOpacity style={styles.title2} onPress={handleAddToy}>
        <Text style={{ textAlign: "center" }}>
          {editingId !== null ? "Update Item" : "Add Item"}
        </Text>
      </TouchableOpacity>

      {/* Items List */}
      <SafeAreaView style={styles.listContainer}>
        <ScrollView>
          {toys.map((toy) => (
            <View
              key={toy.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
                margin: 5,
                backgroundColor: "lightyellow",
                borderRadius: 10,
              }}
            >
              <Text style={{ flex: 1 }}>
                {toy.name} - {toy.price}
              </Text>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity
                  style={styles.title}
                  onPress={() => handleEditToy(toy.id)}
                >
                  <Text>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.title1}
                  onPress={() => handleDeleteToy(toy.id)}
                >
                  <Text>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 20,
    paddingLeft: 0,
    paddingRight: 15,
    backgroundColor: "#ffffff",
    gap: 10,
  },
  title: {
    fontSize: 16,
    padding: 10,
    borderRadius: 25,
    backgroundColor: "lightgreen",
    color: "black",
    fontWeight: "lighter",
  },
  title1: {
    fontSize: 16,
    padding: 10,
    borderRadius: 25,
    backgroundColor: "lightblue",
    color: "black",
    fontWeight: "lighter",
  },
  title2: {
    fontSize: 16,
    padding: 10,
    borderRadius: 25,
    backgroundColor: "lightpink",
    color: "black",
    fontWeight: "lighter",
  },

  itemsContainer: {
    overflow: "scroll",
    fontSize: 16,

    padding: 10,
    borderRadius: 25,
    backgroundColor: "lightyellow",
    color: "black",
    fontWeight: "lighter",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listContainer: {
    height: 400,
  },
});
