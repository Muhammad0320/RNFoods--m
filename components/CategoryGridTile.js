import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({ title, color }) {
  return (
    <View style={[styles.container, styles.outerContainer]}>
      <Pressable style={styles.container}>
        <View
          style={[
            styles.innerContainer,
            styles.container,
            { backgroundColor: color },
          ]}
        >
          <Text style={styles.title}> {title} </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  outerContainer: {
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    textShadowRadius: 8,
    shadowOffset: { width: 0.5, height: 2 },
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  innerContainer: {
    borderRadius: 8,
    justifyContent: "center",
    alignContent: "center",
    padding: 16,
  },

  button: {
    opacity: 0.75,
  },

  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CategoryGridTile;
