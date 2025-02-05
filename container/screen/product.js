import React from "react";
import { Text, View, Button } from "react-native";
const product = ({ navigation, route}) => {
  const { id, name } = route.params;
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
        this is product page
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>id: {id}</Text>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>name: {name}</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

export default product;
