import { StyleSheet, View, Text } from "react-native";
import { MealsList } from "../components/MealsList/MealsList";
// import { useContext } from "react";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
export const FavoritesScreen = () => {
  // const favoriteMealsContext = useContext(FavoritesContext);
  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoriteMealsContext.ids.includes(meal.id),
  // );

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id),
  );

  if (!favoriteMeals.length) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 18, fontWeight: "bold", color: "white" },
});
