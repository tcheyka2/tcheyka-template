import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Main Title" }}
        />

        <Stack.Screen
          name="page_one"
          options={{ title: "Page One Title" }}
        />

        <Stack.Screen
          name="page_two"
          options={{ title: "Page Two Title" }}
        />

        <Stack.Screen
          name="page_three"
          options={{ title: "Page Three Title" }}
        />
        
        <Stack.Screen
          name="page_four"
          options={{ title: "Page Four Title" }}
        />
        
        <Stack.Screen
          name="upgrade"
          options={{ title: "Upgrade to Premium" }}
        />
      </Stack>
      </>
  );
}