import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import  useCreateAxios  from "../../hooks/axiosHook";

const StaffOrderManagement = () => {
  const { createRequest } = useCreateAxios();
  useEffect(() => {
    createRequest("get",'/cakes'
    ).then(response => {
      // Lấy data bằng respone data
      console.log(response.data);
    }).catch(error => {
      if (error.response) {
        console.error("API Error - Response Data:", error.response.data);  
        console.error("API Error - Status:", error.response.status);  
        console.error("API Error - Headers:", error.response.headers); 
      } else if (error.request) {
        console.error("API Error - Request:", error.request);
      } else {
        console.error("API Error - Message:", error.message);
      }
    });
    
  }, []);

  return (
    <View>
      <Text>StaffOrderManagement</Text>
    </View>
  );
};

export default StaffOrderManagement;

const styles = StyleSheet.create({});
