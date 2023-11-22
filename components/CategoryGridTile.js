import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={[styles.gridItem, styles.container]}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        style={[
          ({ pressed }) => [styles.container, pressed ? styles.button : null],
        ]}
        onPress={onPress}
      >
        <View
          style={[
            { backgroundColor: color },
            styles.innerContainer,
            styles.container,
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

  gridItem: {
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
