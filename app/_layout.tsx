import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@redux/store";

export default function AppLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(customerTabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(staffTabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(managerTabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
