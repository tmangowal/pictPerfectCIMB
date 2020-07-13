import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import H1 from "../../components/Text/H1";
import TextUI from "../../components/Text/TextUI";
import Tagline from "../../components/Text/Tagline";
import Colors from "../../constants/Colors";
import Image from "react-native-scalable-image";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({});

export default ({ navigation, data }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.backgroundColor,
        width: width - 30,
        marginHorizontal: 15,
        borderRadius: 6,
        paddingBottom: 25,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 6,
        marginVertical: 10,
      }}
    >
      <Image
        source={{
          uri: data.photoURL,
        }}
        style={{
          borderRadius: 6,
        }}
        width={width - 30}
      />
      <View style={{ paddingHorizontal: 13 }}>
        <TextUI style={{ marginTop: 10 }} bold>
          {data.User.username}
        </TextUI>
        <Tagline>2 Hours Ago</Tagline>
        <TextUI size="sm" style={{ marginTop: 11 }}>
          {data.caption}
        </TextUI>
      </View>
    </View>
  );
};
