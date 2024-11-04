import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import Home from "./(customerTabs)/Home";
import SignIn from "./(auth)/sign-in";
import Catalog from "./CustomerScreens/CakeCatalog";
import { router, useFocusEffect } from "expo-router";
import { getStore } from "utils/AsyncStore";

const Index = () => {
  const [check, setCheck] = useState(false);

  const getToken = async () => {
    const token = await getStore("token");

    setCheck(token.length === 0 ? false : true);
  };

  useFocusEffect(
    useCallback(() => {
      getToken();
    }, [])
  );

  if (check) {
    return router.push("/Home");
  }
  return (
    <View>
      <Home />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
