import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import { Provider, useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import TestScreen from "../screens/TestScreen";
import HomeScreen from "../screens/Home/HomeScreen";

const Stack = createStackNavigator();

export default () => {
  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);

  // Pengganti compDidMount, compDidUpdate, compWillUnmount
  useEffect(() => {
    AsyncStorage.getItem("userData")
      .then((storageItem) => {
        if (!storageItem) throw "Item is empty";
        dispatch({
          type: "USER_LOGIN",
          payload: JSON.parse(storageItem),
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // AsyncStorage.removeItem("userData");
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userSelector.id ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
