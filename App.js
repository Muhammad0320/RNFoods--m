import { StatusBar, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <>
      {" "}
      <StatusBar styles="light" />
      <CategoriesScreen />{" "}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
