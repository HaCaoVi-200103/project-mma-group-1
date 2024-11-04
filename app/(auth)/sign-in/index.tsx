import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import useCreateAxios from "@hooks/axiosHook";
import axios, { AxiosResponse } from "axios";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { setStore } from "utils/AsyncStore";
import { useAppDispatch } from "@hooks/reduxHooks";
import { addProfile } from "@redux/features/profile";

// Define the expected structure of the API response
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
  const dispatch = useAppDispatch();

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

      if (token) {
        await setStore("token", token);
      }
      getScreenByRole(role, token);
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  const addProfileRedux = async (token: string) => {
    try {
      const res = await createRequest("get", "/auth/user");
      // const res = await axios.get("http://10.0.2.2:8080/api/v1/auth/user", {
      //   headers: {
      //     Authorization: "Bearer " + token,
      //   },
      // });
      if (res.status === 200) {
        dispatch(addProfile(res.data));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getScreenByRole = (role: string, token: string) => {
    addProfileRedux(token);
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
    router.push("/sign-up"); // Navigate to the register page
  };
  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  const loginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user: any = await GoogleSignin.signIn();
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
        const { token, role } = response.data;
        getScreenByRole(role, token);
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
        <Text style={styles.title}> Sign In </Text>

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

        <TouchableOpacity onPress={() => handleLogin()} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleRegister}
          style={[styles.button, styles.registerButton]}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => loginWithGoogle()}
          style={styles.googleButton}
        >
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 180,
  },
  frame: {
    width: 350,
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "#BDB09E",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#55432C",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E5DFDB",
    backgroundColor: "#F9F6F2",
    marginBottom: 10,
    fontSize: 14,
  },
  button: {
    width: "100%",
    padding: 12,
    backgroundColor: "#55432C",
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#F9F6F2",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  googleButton: {
    width: "100%",
    padding: 12,
    backgroundColor: "#BDB09E",
    borderRadius: 10,
    marginTop: 10,
  },
  googleButtonText: {
    color: "#55432C",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  linkButton: {
    marginTop: 10,
    alignItems: "center",
  },
  linkText: {
    color: "#55432C",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: "#55432C",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  registerButtonText: {
    color: "#F9F6F2",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
