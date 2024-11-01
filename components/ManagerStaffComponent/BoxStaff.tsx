import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "@constants/Colors";
import ModalUpdate from "./ModalUpdate";
import { router } from "expo-router";

interface Props {
  avatar: string;
  email: string;
  phone: string;
  name: string;
  staffId: string;
}
const BoxStaff: React.FC<Props> = ({ avatar, email, name, phone, staffId }) => {
  const [active, setActive] = useState(false);

  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <View style={styles.boxImage}>
          <Image
            style={styles.image}
            source={{
              uri:
                avatar === ""
                  ? "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
                  : avatar,
            }}
          />
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.text}>{email}</Text>
          <Text style={styles.text}>{phone}</Text>
        </View>
      </View>
      <View style={styles.boxAction}>
        <FontAwesome
          onPress={() =>
            router.push({
              pathname: "/ManagementScreens/UpdateStaff",
              params: { staffId: staffId },
            })
          }
          name="edit"
          size={24}
          color={Colors.BURGUNDYRED}
        />
      </View>
    </View>
  );
};

export default BoxStaff;

const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.IVORYWHITE,
    borderRadius: 10,
    margin: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    margin: 10,
  },
  boxImage: {
    borderRadius: 100,
    borderColor: "#dfe6e9",
    borderWidth: 1,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 100,
  },
  boxAction: {
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
  },
  text: {
    color: "#34495e",
  },
});
