import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import useCreateAxios from "../../hooks/axiosHook";

interface Cake {
  cake_type: string;
  cake_description: string;
  cake_image: string;
}

const Catalog: React.FC = () => {
  const [cakes, setCakes] = useState<Cake[]>([]);
  const { createRequest } = useCreateAxios();

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const response = await createRequest<Cake[]>(
          "get",
          "/CakeCatalog/catalog"
        );
        console.log(response.data);

        setCakes(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu loại bánh:", error);
      }
    };
    fetchCakes();
  }, [createRequest]);

  const renderCake = ({ item }: { item: Cake }) => (
    <View style={styles.cakeCard}>
      <Image source={{ uri: item.images[0] }} style={styles.cakeImage} />
      <Text style={styles.cakeType}>{item.cake_type}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore Categories</Text>
      <FlatList
        data={cakes}
        renderItem={renderCake}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Catalog;

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
  subheading: {
    fontSize: 14,
    color: "#888",
    marginBottom: 15,
  },
  listContainer: {
    paddingBottom: 20,
  },
  cakeCard: {
    width: 150,
    height: 200,
    marginRight: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  cakeImage: {
    width: 140,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  cakeType: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
