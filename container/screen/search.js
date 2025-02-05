import React from "react";
import { Text, View, Button } from "react-native";
const search = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        this is search page
      </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default search;
