import React, { useState } from "react";
import { Button, Image, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { launchImageLibrary, ImagePickerResponse, launchCamera } from 'react-native-image-picker';
import { addItem, clearCart } from "../screens/Box"; // Import các hàm từ Box screen

const Action = () => {
  const dispatch = useDispatch();
  const [response, setResponse] = useState<any>();
  const [ketqua, setKetqua] = useState<any>();
  
  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 1,
      cameraType: 'back',
    }, setResponse);
  };

  return (
    <View>
      <Button title={"Create Cart"} onPress={() => {
        const newItem = { id: Math.random(), name: 'OKOK' };
        dispatch(addItem(newItem));
      }} />
      <Text>-------------------</Text>
      <Button title={"Clear Cart"} onPress={() => {
        dispatch(clearCart());
      }} />
      <Button title={"Camera"} onPress={openCamera} />
      {response && response.assets && response.assets[0] && (
       <View style={{  justifyContent: 'center', alignItems: 'center' }}>
       <Image
         style={{ width: 200, height: 200, borderRadius: 100 }}
         source={{ uri: response.assets[0].uri }}
       />
     </View>
     
      )}
    </View>
  );
};

export default Action;
