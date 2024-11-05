import React from "react";
import { Provider } from "react-redux";
import { store } from "@redux/store";
import { useFonts } from "expo-font";
import StackNavigation from "./Stack";

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
      <StackNavigation />
    </Provider>
  );
}
