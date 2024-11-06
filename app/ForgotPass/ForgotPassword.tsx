import { Alert, Button, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import HeaderCustomize from "@components/ManagerStaffComponent/HeaderCustomize";
import Input from "@components/ManagerStaffComponent/Input";
import { Colors } from "@constants/Colors";
import { router } from "expo-router";
import axios from "axios";
import { useAppSelector } from "@hooks/reduxHooks";
// const id = "6720a5a2588e2bd477bfd1a3";

const ForgotPassword = () => {
  const profile: any = useAppSelector((state) => state.profile.profile);
  const id = profile._id;
  const navigation = useNavigation();
  const [email, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleSendEmailCode = async () => {
    if (email === "" || newPass === "" || confirm === "") {
      return Alert.alert("Missing required field!!!");
    }

    if (newPass !== confirm) {
      return Alert.alert("Password does not match password confirmation");
    }

    const res = await axios.post(
      "http://10.0.2.2:8080/api/v1/profile/check-email",
      {
        email: email,
      }
    );
    if (res.data.statusCode === 200) {
      return router.push({
        pathname: "/ForgotPass/VerifyCode",
        params: { email: email, newPass: newPass },
      });
    }

    return Alert.alert(res.data.message);
  };

  return (
    <View>
      <HeaderCustomize title="Forgot Password" />
      <View>
        <View>
          <Input
            setValueP={setOldPass}
            placeholder="Enter email"
            label="Email"
          />
          <Input
            secure
            placeholder="New password"
            label="Enter new password"
            setValueP={setNewPass}
          />
          <Input
            secure
            placeholder="Enter confirm password"
            setValueP={setConfirm}
            label="Confirm"
          />
        </View>
        <View>
          <Button
            onPress={() => handleSendEmailCode()}
            color={Colors.BURGUNDYRED}
            title="UPDATE"
          ></Button>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
