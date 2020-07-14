import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Permissions, Constants } from "react-native-unimodules";
import H1 from "../../components/Text/H1";
import TextUI from "../../components/Text/TextUI";
import Tagline from "../../components/Text/Tagline";
import Colors from "../../constants/Colors";
import { Icon } from "native-base";
import Header from "../../components/General/Header";
import Image from "react-native-scalable-image";
import PlaceholderImg from "../../../assets/images/login_bg.png";
import Axios from "axios";
import Button from "../../components/Button/Button";
import * as ImagePicker from "expo-image-picker";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 18,
    alignItems: "center",
  },
  commentContainer: {
    paddingHorizontal: 30,
    marginTop: 12,
  },
});

export default (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = () => {
    ImagePicker.launchImageLibraryAsync()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const askPermission = async () => {
    try {
      if (Platform.OS == "ios") {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    askPermission();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      }}
    >
      <SafeAreaView />
      <Header {...props} title="Create Post" />
      <Text>Create Post</Text>
      <Button onPress={openImagePicker}>Upload Post</Button>
    </View>
  );
};
