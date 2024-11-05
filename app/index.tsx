import { View } from "react-native";
import React, { useCallback, useState } from "react";
import { router, useFocusEffect } from "expo-router";
import { getStore } from "utils/AsyncStore";
import useCreateAxios from "@hooks/axiosHook";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { addProfile } from "@redux/features/profile";
import Home from "@app/(customerTabs)/Home";

const Index = () => {
  const { createRequest } = useCreateAxios();
  const [role, setRole] = useState("");
  const dispatch = useAppDispatch();
  const profile: any = useAppSelector((state) => state.profile.profile);

  const addProfileRedux = async () => {
    try {
      const res = await createRequest("get", "/auth/user");
      if (res.status === 200) {
        dispatch(addProfile(res.data));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getToken = async () => {
    const token = await getStore("token");
    const role = await getStore("role");
    const flat = token.length === 0 ? false : true;
    if (flat) {
      addProfileRedux();
      getScreenByRole(role);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getToken();
    }, [])
  );

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

  if (profile._id) {
    return router.push("/Home");
  }

  return (
    <View>
      <Home />
    </View>
  );
};

export default Index;
