import CakeAllScreen from "@app/CustomerScreens/CakeAllScreen";
import Catalog from "../CustomerScreens/CakeCatalog";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi there!</Text>
      <Text style={styles.subtitle}>What are you looking for today?</Text>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={20}
          color="#B0B0B0"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search cake, cookies, anything..."
          placeholderTextColor="#B0B0B0"
        />
      </View>

      <View style={styles.offerContainer}>
        <Image
          source={require("../../assets/images/cakeSample.jpg")}
          style={styles.offerImage}
        />
        <View style={styles.offerTextContainer}>
          <Text style={styles.offerTitle}>Cake Tart Strawberries</Text>
          <Text style={styles.offerDiscount}>up to 50% OFF!</Text>
        </View>
      </View>
      <Catalog/>
      <CakeAllScreen/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 20, 
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: "#333",
  },
  offerContainer: {
    flexDirection: "row",
    backgroundColor: "#FEE9E2",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  offerImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  offerTextContainer: {
    flex: 1,
  },
  offerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 25,
  },
  offerDiscount: {
    fontSize: 20,
    color: "#FF6347",
    marginLeft: 25,
  },
});
