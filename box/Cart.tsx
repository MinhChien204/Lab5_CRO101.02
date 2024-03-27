import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../screens/Box";
import { ImagePickerResponse, launchImageLibrary } from "react-native-image-picker";

const Cart = () => {
  const [selectedImageUri, setSelectedImageUri] = useState<string | null>(null);

  const cartItem = useSelector((state: RootState) => state.cart.items);

  return (
    <View>
      <Text>Cart</Text>
      <Text>Số lượng: {cartItem.length}</Text>
     <Image />
    </View>
  );
};

export default Cart;
