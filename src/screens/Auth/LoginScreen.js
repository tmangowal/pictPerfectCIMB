import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Button from "../../components/Button/Button";

export default (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
        <Text>Navigate to register screen</Text>
      </TouchableOpacity>
      <Text style={{ fontFamily: "AvenirNextLTPro-Bold" }}>Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
