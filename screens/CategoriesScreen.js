import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { color, title } }) => (
        <CategoryGridTile color={color} title={title} />
      )}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
