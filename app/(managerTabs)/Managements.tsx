import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ManagementOrder from "../ManagementScreen/ManagementOrder";
import ManagementCake from "../ManagementScreen/ManagementCake";

const Drawer = createDrawerNavigator();

export default function Management() {
  return (
    <Drawer.Navigator initialRouteName="Management Order">
      <Drawer.Screen name="Management Order" component={ManagementOrder} />
      <Drawer.Screen name="Management Cake" component={ManagementCake} />
    </Drawer.Navigator>
  );
}
