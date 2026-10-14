import { StyleSheet, View} from "react-native";
import NavigationTile from "./NavigationTile";
import type { Href } from "expo-router";

const tiles: { title: string; route: Href; requiresPremium: boolean }[] = [
  { title: "Page One", route: "/page_one", requiresPremium: false },
  { title: "Page Two", route: "/page_two", requiresPremium: false },
  { title: "Page Three", route: "/page_three", requiresPremium: true},
  { title: "Page Four", route: "/page_four", requiresPremium: true },
];

type HomeTileProps = {
  isPremium: boolean
};

export default function HomeTiles({ isPremium }: HomeTileProps) {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {tiles.map((tile) => (
          <NavigationTile
            key={tile.title + '-key'}
            title={tile.title}
            route={tile.route}
            requiresPremium={tile.requiresPremium}
            isPremium={isPremium}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
