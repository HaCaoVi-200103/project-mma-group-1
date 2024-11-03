import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OrderStatistic from "../Statistics/OrderStatistic";
import StaffStatistic from "../Statistics/StaffStatistic";

const Drawer = createDrawerNavigator();

export default function Management() {
  return (
    <Drawer.Navigator initialRouteName="Management Order">
      <Drawer.Screen name="Order Statistic" component={OrderStatistic} />
      <Drawer.Screen name="Staff Satistic" component={StaffStatistic} />
    </Drawer.Navigator>
  );
}
