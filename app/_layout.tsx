import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@redux/store";
import { useFonts } from "expo-font";

export default function AppLayout() {
  useFonts({
    inter: require(`./../assets/fonts/Inter_24pt-Regular.ttf`),
    "inter-medium": require(`./../assets/fonts/Inter_24pt-Medium.ttf`),
    "inter-bold": require(`./../assets/fonts/Inter_24pt-Bold.ttf`),
    "inter-italic": require(`./../assets/fonts/Inter_24pt-Italic.ttf`),
    unna: require(`./../assets/fonts/Unna-Regular.ttf`),
    "unna-italic": require(`./../assets/fonts/Unna-Italic.ttf`),
    "unna-bold": require(`./../assets/fonts/Unna-Bold.ttf`),
  });
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(customerTabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(staffTabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(managerTabs)" options={{ headerShown: false }} />
<<<<<<< HEAD
        <Stack.Screen
          name="DetailScreens/OrderDetail"
=======
        <Stack.Screen name="DetailScreens/AllCake"  options={{ headerShown: false }}/>
        <Stack.Screen
          name="DetailScreens/CakeManagementDetail"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailScreens/ToppingManagementDetail"
>>>>>>> 8972f3e3d4351f2d5b57fd5cc3c3a20b52e690a3
          options={{ headerShown: false }}
        />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
