import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SignIn from "./(auth)/sign-in";
import Catalog from "./CustomerScreens/CakeCatalog";

const index = () => {
  return (
    <View>
      <SignIn />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
