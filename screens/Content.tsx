// import React from "react";
// import { useDispatch } from "react-redux";
// import { View,Button,StyleSheet,Text } from "react-native";
// import { addItem,clearCart,changeItem,removeItem } from "./store";

// const content=()=>{
//   const dispatch = useDispatch()

//   const handleAddItem = ()=>{
//     //ví dụ: thêm một sản phẩm cụ thể vào giỏ hàng
//     const newItem = {
//       id: Math.random(),name:'Sản phẩm mới'
//     }
//     dispatch(addItem(newItem))
//   }
//   function handleRemoveItem() {
//     dispatch(clearCart())
//   }
//   function handleChangleItem() {
//     dispatch(changeItem({id:2}))
//   }
//   function handleDeleteItem() {
//     dispatch(removeItem({id:2}))
//   }
// }