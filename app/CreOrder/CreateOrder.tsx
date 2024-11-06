import useCreateAxios from "@hooks/axiosHook";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";

interface OrderItem {
  _id: string;
  cake_name: string;
  cake_price: number;
  quantity: number;
  total_price: number;
}

const CreateOrder = () => {
  const { createRequest } = useCreateAxios();
  const [paymentMethod, setPaymentMethod] = useState("E-wallet");
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const fetchOrderItems = async () => {
    try {
      const response = await createRequest<OrderItem[]>("get", "/order-items");
      setOrderItems(response.data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch order items.");
    }
  };

  useEffect(() => {
    fetchOrderItems();
  }, []);

  const handlePurchase = async () => {
    const orderData = {
      paymentMethod,
      items: orderItems,
    };

    try {
      const response = await createRequest("post", "/orders", orderData);
      if (response.status === 201) {
        Alert.alert("Success", "Order placed successfully!");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to place the order.");
    }
  };

  const renderItem = ({ item }: { item: OrderItem }) => (
    <View style={styles.orderItem}>
      <Text>Name: {item.cake_name}</Text>
      <Text>Price: {item.cake_price}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>Total: {item.total_price}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Your Order</Text>
      <FlatList
        data={orderItems}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
      <Text style={styles.sectionTitle}>Payment Method</Text>
      <View style={styles.radioGroup}>
        <Button title="Cash" onPress={() => setPaymentMethod("Cash")} />
        <Text style={styles.radioLabel}></Text>
      </View>
      <View style={styles.radioGroup}>
        <Button title="E-wallet" onPress={() => setPaymentMethod("E-wallet")} />
        <Text style={styles.radioLabel}></Text>
      </View>
      <Button title="PURCHASE" onPress={handlePurchase} color="#C0392B" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FDFDF5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#5A4638",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#5A4638",
    marginVertical: 10,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioLabel: {
    fontSize: 16,
    color: "#5A4638",
  },
  orderItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#F8F8F8",
    borderRadius: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5A4638",
    textAlign: "right",
    marginVertical: 20,
  },
});

export default CreateOrder;
