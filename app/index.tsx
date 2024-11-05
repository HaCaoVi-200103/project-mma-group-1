import { View } from "react-native";
import React, { useCallback, useState } from "react";
import { router, useFocusEffect } from "expo-router";
import { getStore, removeStore } from "utils/AsyncStore";
import useCreateAxios from "@hooks/axiosHook";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { addProfile } from "@redux/features/profile";
import Home from "@app/(customerTabs)/Home";

const Index = () => {
  const { createRequest } = useCreateAxios();
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
    const flat = token.length === 0 ? false : true;
    // await removeStore("token");
    if (flat) {
      addProfileRedux();
    }
  };

  useFocusEffect(
    useCallback(() => {
      getToken();
    }, [])
  );

  return (
    <View>
      <Home />
    </View>
  );
};

export default Index;
