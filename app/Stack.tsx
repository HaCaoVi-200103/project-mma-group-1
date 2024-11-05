import React, { useEffect } from "react";
import { router, Stack } from "expo-router";
import { useAppSelector } from "@hooks/reduxHooks";

const StackNavigation = () => {
  const profile: any = useAppSelector((state) => state.profile.profile);

  useEffect(() => {
    if (profile.role === "customer") {
      router.push("/Home");
    } else if (profile.role === "staff") {
      router.push("/StaffOrderManagement");
    } else if (profile.role === "manager") {
      router.push("/Managements");
    }
  }, [profile.role]); // Điều hướng khi profile.role thay đổi

  return (
    <Stack>
      <Stack.Screen name="(customerTabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(staffTabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(managerTabs)" options={{ headerShown: false }} />
      <Stack.Screen name="DetailScreens/OrderDetail" />
      <Stack.Screen
        name="DetailScreens/AllCake"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailScreens/CakeManagementDetail"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailScreens/AddCake"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailScreens/AddTopping"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailScreens/ToppingManagementDetail"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default StackNavigation;
