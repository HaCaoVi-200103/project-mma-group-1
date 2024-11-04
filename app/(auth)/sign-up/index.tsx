import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRouter } from "expo-router";

const Register: React.FC = () => {
  const router = useRouter();
  const navigation = useNavigation();

  const [username, setUsername] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [userAvatar, setUserAvatar] = useState<string>("");

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleRegister = () => {
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
      user_avatar: userAvatar,
    };

    console.log("User data:", userData);
    Alert.alert("Registration Successful!", "You have successfully registered your account!");
    router.push("/sign-in");
  };

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.logoContainer}>
          <Image
            source={require("@assets/images/logo.jpeg")} 
            style={styles.logo}
          />
        </View>

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
    backgroundColor: "#F0E5CF",
  },
  frame: {
    width: 350,
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 15,
    backgroundColor: "#E9DAC1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 20,
    borderRadius: 80, // Half of the logo width and height for circular shape
    overflow: "hidden",
    width: 160,
    height: 160,
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6E4B1F",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#D3C3B1",
    backgroundColor: "#FFF",
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    width: "100%",
    paddingVertical: 14,
    backgroundColor: "#6E4B1F",
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginButton: {
    marginTop: 10,
  },
  loginButtonText: {
    color: "#6E4B1F",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
