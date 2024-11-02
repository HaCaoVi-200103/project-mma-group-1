import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import useCreateAxios from "../../hooks/axiosHook";
interface Cake {
  cake_name: string;
  cake_price: number;
  cake_image: string;
}

const CakeAllScreen: React.FC = () => {
  const [cakes, setCakes] = useState<Cake[]>([]);
  const { createRequest } = useCreateAxios();

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const response = await createRequest<Cake[]>(
          "get",
          "/CakeCatalog/all-cake"
        );
        setCakes(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu loại bánh:", error);
      }
    };

    fetchCakes();
  }, [createRequest]);


  const renderCake = ({ item }: { item: Cake }) => (
    <View style={styles.cakeCard}>
      <Image source={{ uri: item.cake_image }} style={styles.cakeImage} />
      <Text style={styles.cakeName}>{item.cake_name}</Text>
      <Text style={styles.cakePrice}>${item.cake_price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All cake</Text>
      <FlatList
        data={cakes}
        renderItem={renderCake}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default CakeAllScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  listContainer: {
    paddingBottom: 20,
  },
  cakeCard: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: "row",
  },
  cakeImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  cakeName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    flex: 1,
  },
  cakePrice: {
    fontSize: 14,
    color: "#FF6347",
    fontWeight: "bold",
    marginTop: 5,
  },
  addButton: {
    backgroundColor: "#FF6347",
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
