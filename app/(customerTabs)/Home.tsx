import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        onPress={() => router.push("/Rating")}
        title="Rating Screen"
      ></Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 100,
  },
});
