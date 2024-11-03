import { Alert, Button, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import HeaderCustomize from "@components/ManagerStaffComponent/HeaderCustomize";
import Input from "@components/ManagerStaffComponent/Input";
import { Colors } from "@constants/Colors";
import { router } from "expo-router";

const ChangePassword = () => {
  const navigation = useNavigation();
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleSendEmailCode = () => {
    if (oldPass === "" || newPass === "" || confirm === "") {
      return Alert.alert("Missing required field!!!");
    }

    if (newPass !== confirm) {
      return Alert.alert("Password does not match password confirmation");
    }
    router.push({
      pathname: "/ProfileScreen/FieldCode",
      params: { newPass: newPass },
    });
  };

  return (
    <View>
      <HeaderCustomize title="Change Password" />
      <View>
        <View>
          <Input
            secure
            setValueP={setOldPass}
            placeholder="Enter old password"
            label="Old password"
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

export default ChangePassword;
