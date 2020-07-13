import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
} from "react-native";
import H1 from "../../components/Text/H1";
import TextUI from "../../components/Text/TextUI";
import Tagline from "../../components/Text/Tagline";
import Colors from "../../constants/Colors";
import PostCard from "./PostCard";
import Axios from "axios";
import { API_URL } from "../../constants/API";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({});

export default ({ navigation }) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    Axios.get(`${API_URL}/posts`, {
      params: {
        include: "User",
      },
    })
      .then((res) => {
        console.log(res.data);
        setPostList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderPosts = ({ item }) => {
    return <PostCard data={item} />;
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      }}
    >
      <SafeAreaView />
      <FlatList
        data={postList}
        renderItem={renderPosts}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
