import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import useCreateAxios from "@hooks/axiosHook";
import { AxiosResponse } from "axios";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

interface LoginResponse {
  token: string;
  role: string;
}

const SignIn: React.FC = () => {
  const router = useRouter();
  const [user_name, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [googleUserInfo, setGoogleUserInfo] = useState();
  const { createRequest } = useCreateAxios();
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleLogin = async () => {
    if (!user_name || !password) {
      alert("Please enter your information!");
      return;
    }

    try {
      const response: AxiosResponse<LoginResponse> = await createRequest(
        "post",
        "/auth/login",
        { user_name, password }
      );
      const { token, role } = response.data;
      getScreenByRole(role);
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  const getScreenByRole = (role: string) => {
    switch (role.toLowerCase()) {
      case "customer":
        router.push("/Home");
        break;
      case "staff":
        router.push("/StaffOrderManagement");
        break;
      case "manager":
        router.push("/Managements");
        break;
      default:
        alert("Invalid role!");
        break;
    }
  };

  const handleRegister = () => {
    router.push("/sign-up");
  };
  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  const loginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user: any = await GoogleSignin.signIn();
      console.log(user.data);
      console.log(user.data.user.name);
      try {
        const response: AxiosResponse<LoginResponse> = await createRequest(
          "post",
          "/auth/loginByGoogle",
          {
            user_name: user.data.user.email,
            full_name: user.data.user.name,
            email: user.data.user.email,
            password: user.data.user.id,
          }
        );

        console.log("Full Response:", response);
        console.log("Data from Response:", response.data); // Log the specific data part

        const { token, role } = response.data;
        console.log("role: ", role);
        getScreenByRole(role);
      } catch (error) {
        console.error("Login error:", error);
        alert("Login failed. Please check your credentials.");
      }
      setGoogleUserInfo(user);
    } catch (error) {
      console.log(error);
    }
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

        <Text style={styles.title}>Sign In</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#7d7d7d"
          value={user_name}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#7d7d7d"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleRegister}
          style={[styles.button, styles.registerButton]}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={loginWithGoogle} style={styles.googleButton}>
          <Image
            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" }}
            style={styles.googleIcon}
          />
          <Image
            source={require("@assets/images/google.png")}
            style={styles.additionalIcon}
          />
          <Text style={styles.googleButtonText}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

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
    borderRadius: 40, // Half of the logo width and height for circular shape
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
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 14,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginLeft: 30,
  },
  additionalIcon: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  googleButtonText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
    marginRight: 60,

  },
  linkButton: {
    marginTop: 15,
  },
  linkText: {
    color: "#6E4B1F",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: "#8B5E3B",
    marginTop: 10,
  },
  registerButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
