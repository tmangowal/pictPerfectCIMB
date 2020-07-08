import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../../components/Button/Button";
import LoginBG from "../../../assets/images/signup_bg.png";
import DarkOverlay from "../../components/General/DarkOverlay";
import TextUI from "../../components/Text/TextUI";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  contentContainer: {
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontFamily: "AvenirNextLTPro-Heavy",
    fontSize: 34,
    lineHeight: 40,
  },
  loginText: {
    marginTop: 12,
  },
});

export default (props) => {
  return (
    <ImageBackground source={LoginBG} style={{ ...styles.bgImage }}>
      <DarkOverlay />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior="padding"
          style={{ justifyContent: "center", flex: 1 }}
        >
          <View style={{ ...styles.contentContainer }}>
            <TextUI style={{ ...styles.welcomeText }}>Create an account</TextUI>
            <View
              style={{
                borderRadius: 22,
                paddingVertical: 11,
                paddingHorizontal: 20,
                justifyContent: "center",
                marginTop: 58,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  opacity: 0.2,
                  borderRadius: 22,
                  ...StyleSheet.absoluteFillObject,
                }}
              />
              <TextInput
                autoCapitalize="none"
                placeholderTextColor="lightgrey"
                style={{
                  fontFamily: "AvenirNextLTPro-Regular",
                  fontSize: 17,
                  color: "white",
                  lineHeight: 19,
                }}
                placeholder="Username"
              />
            </View>
            <View
              style={{
                borderRadius: 22,
                paddingVertical: 11,
                paddingHorizontal: 20,
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  opacity: 0.2,
                  borderRadius: 22,
                  ...StyleSheet.absoluteFillObject,
                }}
              />
              <TextInput
                autoCapitalize="none"
                placeholderTextColor="lightgrey"
                style={{
                  fontFamily: "AvenirNextLTPro-Regular",
                  fontSize: 17,
                  color: "white",
                  lineHeight: 19,
                }}
                placeholder="Name"
              />
            </View>
            <View
              style={{
                borderRadius: 22,
                paddingVertical: 11,
                paddingHorizontal: 20,
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  opacity: 0.2,
                  borderRadius: 22,
                  ...StyleSheet.absoluteFillObject,
                }}
              />
              <TextInput
                autoCapitalize="none"
                placeholderTextColor="lightgrey"
                style={{
                  fontFamily: "AvenirNextLTPro-Regular",
                  fontSize: 17,
                  color: "white",
                  lineHeight: 19,
                }}
                placeholder="Email"
              />
            </View>
            <View
              style={{
                borderRadius: 22,
                paddingVertical: 11,
                paddingHorizontal: 20,
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  opacity: 0.2,
                  borderRadius: 22,
                  ...StyleSheet.absoluteFillObject,
                }}
              />
              <TextInput
                secureTextEntry
                autoCapitalize="none"
                placeholderTextColor="lightgrey"
                style={{
                  fontFamily: "AvenirNextLTPro-Regular",
                  fontSize: 17,
                  color: "white",
                  lineHeight: 19,
                }}
                placeholder="Password"
              />
            </View>
            <Button containerStyle={{ marginTop: 40 }} size="lg">
              SIGN UP
            </Button>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
