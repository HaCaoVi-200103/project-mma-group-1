import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./(customerTabs)/Home";
import SignIn from "./(auth)/sign-in";
import Catalog from "./CustomerScreens/CakeCatalog";

const index = () => {
  return (
    <View>
      <Home />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
