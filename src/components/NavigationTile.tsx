import { router, type Href } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type NavigationTileProps = {
  title: string;
  route: Href;
  requiresPremium: boolean;
  isPremium: boolean
};

export default function NavigationTile({
  title,
  route,
  requiresPremium,
  isPremium,
}: NavigationTileProps) {
  return (
    <Pressable
      key={title}
      style={[styles.tile, requiresPremium && !isPremium && styles.lockedTile]}
      onPress={() => {
        if (requiresPremium && !isPremium) {
          router.push("/upgrade");
          return;
        }

        router.push(route);
      }}
    >
      <View style={styles.titleRow}>
        {requiresPremium && !isPremium && (
          <Text style={styles.lockIcon}>🔒</Text>
        )}

        <Text style={styles.tileText}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  tile: {
    width: "48%",
    aspectRatio: 1,
    backgroundColor: "#4682B4",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  lockedTile: {
    backgroundColor: "#7A8A99",
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  tileText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  lockIcon: {
    marginRight: 6,
    fontSize: 18,
  },
});
