import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

const SignIn: React.FC = () => {
  const router = useRouter();
  const [role, setRole] = useState<string>("");

  const getScreenByRole = () => {
    if (!role) {
      return;
    }

    switch (role.toLowerCase()) {
      case "customer":
        router.push("/Home");
        break;
      case "staff":
        router.push("/StaffOrders");
        break;
      case "manager":
        router.push("/ManagerOrders");
        break;
      default:
        alert("Role không hợp lệ!");
        break;
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter Role to codeeeeeeee"
        onChangeText={(value) => setRole(value)}
      />
      <TouchableOpacity onPress={getScreenByRole} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#7d7d7d",
    margin: 50,
    marginTop: 100,
  },
  button: {
    padding: 20,
    backgroundColor: "#000",
    borderRadius: 15,
    marginTop: 20,
    borderWidth: 1,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "medium",
  },
});
