import React from "react";
import { Text, View, Button } from "react-native";
const profile = ({ navigation}) => {
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
        this is profile page
      </Text>
     
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate("Search")}
      />
    </View>
  );
};

export default profile;
