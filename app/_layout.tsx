import React from "react";
import { Stack, useRouter } from "expo-router";

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="(customerTabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(staffTabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(managerTabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
