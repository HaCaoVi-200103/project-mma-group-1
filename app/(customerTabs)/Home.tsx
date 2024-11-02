import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Home = () => {
  const route = useRouter();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        onPress={() => route.push("/RatingScreen/Rating")}
        title="Rating"
      />
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
