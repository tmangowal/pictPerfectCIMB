import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import { useSelector } from "react-redux";
import TextUI from "../../components/Text/TextUI";
import Axios from "axios";
import { API_URL } from "../../constants/API";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
});

// DRY Code

// Do not
// Repeat
// Yourself

export default ({ navigation }) => {
  const [postCount, setPostCount] = useState(0);
  const userSelector = useSelector((state) => state.user);

  useEffect(() => {
    Axios.get(`${API_URL}/posts`, {
      params: {
        UserId: userSelector.id,
      },
    })
      .then((res) => {
        setPostCount(res.data.result.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={{ ...styles.container }}>
      {/* <Text>TEST SCREEN</Text> */}
      <TextUI size="lg" accent bold>
        {userSelector.username}
      </TextUI>
      <TextUI size="lg" accent bold>
        {userSelector.email}
      </TextUI>
      <TextUI size="lg" accent bold>
        {userSelector.fullName}
      </TextUI>
      <TextUI size="lg" accent bold>
        {userSelector.bio}
      </TextUI>
      <TextUI size="md" bold>
        {postCount} posts
      </TextUI>
    </View>
  );
};
