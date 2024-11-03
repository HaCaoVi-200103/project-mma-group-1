import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
<<<<<<< HEAD
import OrderStatistic from "../Statistics/OrderStatistic";
import StaffStatistic from "../Statistics/StaffStatistic";
=======
import OrderStatistic from "@app/Statistics/OrderStatistic";
import StaffStatistic from "@app/Statistics/StaffStatistic";
import CakeStatistic from "@app/Statistics/CakeStatistic";
>>>>>>> 8972f3e3d4351f2d5b57fd5cc3c3a20b52e690a3

const Drawer = createDrawerNavigator();

export default function Management() {
  return (
    <Drawer.Navigator initialRouteName="Management Order">
      <Drawer.Screen name="Order Statistic" component={OrderStatistic} />
<<<<<<< HEAD
      <Drawer.Screen name="Staff Satistic" component={StaffStatistic} />
=======
      <Drawer.Screen name="Staff Statistic" component={StaffStatistic} />
      <Drawer.Screen name="Cake Statistic" component={CakeStatistic} />
>>>>>>> 8972f3e3d4351f2d5b57fd5cc3c3a20b52e690a3
    </Drawer.Navigator>
  );
}
