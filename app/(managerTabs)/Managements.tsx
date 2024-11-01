import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Href, router } from "expo-router";

const Management = () => {
  return (
    <View>
      <Text>Managements</Text>
      <Button
        onPress={() => router.push("/ManagementScreens/ManageStaff")}
        title="Go to Manage Staff"
      ></Button>
    </View>
  );
};

export default Management;

const styles = StyleSheet.create({});
