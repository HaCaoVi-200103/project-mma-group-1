import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the Store type
type Store = {
  store_name: string;
  open_hours: string;
  address: string;
  image: string;
  phone_number: string;
};

// AboutStore component
const AboutStore: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchStores = async () => {
      const response = await axios.get('http://localhost:8080/api/v1/stores');
      setStores(response.data);
      setLoading(false); // Ensure loading is set to false after data is fetched
    };

    fetchStores();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Loading indicator
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Our Stores</Text>
      <FlatList
        data={stores}
        keyExtractor={(item, index) => index.toString()} // Use index as key
        renderItem={({ item }) => (
          <View style={styles.storeCard}>
            <Image source={{ uri: item.image }} style={styles.storeImage} />
            <Text style={styles.storeName}>{item.store_name}</Text>
            <Text style={styles.storeDetails}>Address: {item.address}</Text>
            <Text style={styles.storeDetails}>Open Hours: {item.open_hours}</Text>
            <Text style={styles.storeDetails}>Phone: {item.phone_number}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  storeCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  storeImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  storeName: {
    fontSize: 18,
    fontWeight: '600',
  },
  storeDetails: {
    fontSize: 14,
    color: '#555',
  },
});

export default AboutStore;
