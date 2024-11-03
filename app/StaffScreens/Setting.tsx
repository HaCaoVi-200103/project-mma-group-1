import { View, Button } from "react-native";
import React from "react";
import { router, useNavigation } from "expo-router";
import HeaderCustomize from "@components/ManagerStaffComponent/HeaderCustomize";
import { Colors } from "@constants/Colors";
const id = "6724a907f14e21cced1f60af";

const Setting = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <View>
      <HeaderCustomize title="Setting" />
      <View style={{ marginVertical: 10 }}>
        <Button
          onPress={() =>
            router.push({
              pathname: "/StaffScreens/ProfileCustomizeStaff",
              params: { staffId: id },
            })
          }
          color={Colors.BURGUNDYRED}
          title="Update Profile"
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          onPress={() => router.push("/ProfileScreen/ChangePassword")}
          color={Colors.BURGUNDYRED}
          title="Change Password"
        />
      </View>
    </View>
  );
};

export default Setting;
