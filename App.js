import { StatusBar, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {" "}
      <StatusBar styles="dark" />
      <NavigationContainer></NavigationContainer>
      <CategoriesScreen />{" "}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
