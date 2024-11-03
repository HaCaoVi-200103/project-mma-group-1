import { Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { router } from "expo-router";
interface Props {
  avatar: string;
  fullName: string;
  email: string;
}
const customerId = "6720a5a2588e2bd477bfd1a3";
const BoxProfile: React.FC<Props> = ({ avatar, email, fullName }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/ProfileScreen/ProfileCustomizeCustomer",
          params: { customerId: customerId },
        })
      }
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
          backgroundColor: "#fff",
          padding: 10,
          position: "relative",
        }}
      >
        <Image
          style={{ width: 60, height: 60, borderRadius: 100 }}
          source={{ uri: avatar }}
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>{fullName}</Text>
          <Text>{email}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => router.push("ProfileScreen/Setting")}
        style={{ position: "absolute", right: 10, top: 25 }}
      >
        <Ionicons name="settings" size={30} color="grey" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default BoxProfile;
