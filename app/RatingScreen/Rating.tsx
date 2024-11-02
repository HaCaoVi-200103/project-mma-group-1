import { View, StyleSheet, SafeAreaView } from "react-native";
import React, { useCallback, useState } from "react";
import BoxRating from "@components/RatingComponent/BoxRating";
import { useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useCreateAxios from "@hooks/axiosHook";
import { AxiosResponse } from "axios";
// import { RouteProp, useRoute } from "@react-navigation/native";
interface DataRating {
  name: string;
  image: string;
  _id: string;
}
const userId = "6720a5a2588e2bd477bfd1a3";
const dataCake: DataRating[] = [
  {
    image:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0A475B34-4E78-40D8-9F30-46223B7D77E7/Derivates/E55C7EA4-0E60-403F-B5DC-75EA358197BD.jpg",
    name: "Chocolate",
    _id: "672104199c2303f77b4117d8",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3dU2YNn01QVCNDI5FLgsU0vBgwp_sSJx0Q&s",
    name: "Milk Cake",
    _id: "67210529f5a57301f368dcf5",
  },
];

const Rating = () => {
  const [data, setData] = useState<DataRating[]>(dataCake);
  const { createRequest } = useCreateAxios();
  const getDataStore = async () => {
    try {
      const list = await AsyncStorage.getItem("dataToRating");
      if (!list) {
        // setData([]);
      } else {
        const parse = JSON.parse(list);
        for (const element of parse) {
          const cakeId = element._id;
          const checkUserRating = await fetchApiGetListRating(cakeId);

          if (checkUserRating && checkUserRating.length > 0) {
            const filter = checkUserRating.filter((x) => x.user_id === userId);

            if (filter.length > 0) {
              const newPares = parse.filter((x) => x._id !== filter[0].cake_id);
              return setData(newPares);
            }
          } else {
            return setData(parse);
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getDataStore();
    }, [])
  );

  const fetchApiGetListRating = async (cakeId: string) => {
    try {
      const res: AxiosResponse = await createRequest(
        "get",
        `/list-rating/${cakeId}`
      );
      return res.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {data.length > 0 &&
          data.map((item, index) => (
            <>
              <BoxRating
                cakeId={item._id}
                key={index + item._id}
                name={item.name}
                image={item.image}
              />
            </>
          ))}
      </View>
    </SafeAreaView>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
