import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

const Register: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [userAvatar, setUserAvatar] = useState<string>(""); // Optional

  const handleRegister = () => {
    // Validate input
    if (!username || !fullName || !email || !password || !phoneNumber || !address) {
      Alert.alert("Please fill in all fields!");
      return;
    }

    const userData = {
      user_name: username,
      full_name: fullName,
      email,
      password,
      phone_number: phoneNumber,
      address,
      user_avatar: userAvatar, // Optional
    };

    // Here you would typically send `userData` to your backend API for registration.
    console.log("User data:", userData);
    Alert.alert("Registration Successful!", "You have successfully registered your account!");

    // Navigate to the sign-in page after registration
    router.push("/sign-in");
  };

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <Text style={styles.title}>Register</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#7d7d7d"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#7d7d7d"
          value={fullName}
          onChangeText={setFullName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#7d7d7d"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#7d7d7d"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#7d7d7d"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="#7d7d7d"
          value={address}
          onChangeText={setAddress}
        />

        <TextInput
          style={styles.input}
          placeholder="Avatar URL (Optional)"
          placeholderTextColor="#7d7d7d"
          value={userAvatar}
          onChangeText={setUserAvatar}
        />

        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        {/* Button to navigate back to login page */}
        <TouchableOpacity onPress={() => router.push("/sign-in")} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  frame: {
    width: "100%",
    maxWidth: 400,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#BDB09E", // IVORYWHITE
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#55432C", // CHOCOLATEBROWN
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E5DFDB", // FOGGYGRAY
    backgroundColor: "#F9F6F2", // IVORYWHITE
    marginBottom: 10,
    fontSize: 14,
  },
  button: {
    width: "100%",
    padding: 12,
    backgroundColor: "#55432C", // CHOCOLATEBROWN
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#F9F6F2", // IVORYWHITE
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginButton: {
    marginTop: 10,
  },
  loginButtonText: {
    color: "#55432C", // CHOCOLATEBROWN
    fontSize: 14,
    textAlign: "center",
  },
});
