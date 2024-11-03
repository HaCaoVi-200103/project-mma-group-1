import { SafeAreaView } from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "expo-router";
import BoxProfile from "@components/ProfileComponent/box";
import useCreateAxios from "@hooks/axiosHook";
const id = "6720a5a2588e2bd477bfd1a3";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { createRequest } = useCreateAxios();
  const [data, setData]: any = useState(null);
  const fetchApiCustomerfByID = async () => {
    try {
      const res = await createRequest("get", `/profile/customer/${id}`);
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      fetchApiCustomerfByID();
    }, [])
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
      <BoxProfile
        avatar={
          data
            ? data.user_avatar
            : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
        }
        email={data ? data.email : ""}
        fullName={data ? data.full_name : ""}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;
