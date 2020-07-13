import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import H1 from "../../components/Text/H1";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({});

export default ({ navigation }) => {
  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <H1 accent>HOME SCREEN</H1>
      <View style={{ backgroundColor: "pink" }}>
        <Image
          source={{
            uri:
              "https://pict-perfect.ap-south-1.linodeobjects.com/POST-1594348157281.jpeg",
          }}
          style={{
            width: width - 30,
            height: width - 30,
            marginHorizontal: 15,
            borderRadius: 6,
          }}
        />
      </View>
    </View>
  );
};
