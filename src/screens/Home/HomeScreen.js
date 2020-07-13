import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import H1 from "../../components/Text/H1";
import TextUI from "../../components/Text/TextUI";
import Tagline from "../../components/Text/Tagline";
import Colors from "../../constants/Colors";
import PostCard from "./PostCard";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({});

export default ({ navigation }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      }}
    >
      <PostCard />
      {/* <Image
        source={{
          uri:
            "https://pict-perfect.ap-south-1.linodeobjects.com/POST-1594348157281.jpeg",
        }}
        style={{
          width: undefined,
          height: undefined,
          borderRadius: 6,
          flex: 1,
          maxHeight: 500,
        }}
      /> */}
    </View>
  );
};
