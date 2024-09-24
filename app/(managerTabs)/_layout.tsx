import { StyleSheet, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const ManagerTabLayout: React.FC = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000",
      }}
    >
      <Tabs.Screen
        name="ManagerOrders"
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ color }) => <Text style={styles.icon}>📦</Text>,
        }}
      />
      <Tabs.Screen
        name="Managements"
        options={{
          tabBarLabel: "Managements",
          tabBarIcon: ({ color }) => <Text style={styles.icon}>👥</Text>,
        }}
      />
      <Tabs.Screen
        name="Statistic"
        options={{
          tabBarLabel: "Statistic",
          tabBarIcon: ({ color }) => <Text style={styles.icon}>📊</Text>,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => <Text style={styles.icon}>👤</Text>,
        }}
      />
    </Tabs>
  );
};

export default ManagerTabLayout;

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
  },
});
