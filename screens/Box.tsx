import { configureStore, createSlice } from "@reduxjs/toolkit";

// Định nghĩa slice reducer cho giỏ hàng
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Ban đầu giỏ hàng không có sản phẩm
  },
  reducers: {
    // Thêm sản phẩm vào giỏ hàng
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    // Xoá toàn bộ giỏ hàng
    clearCart: (state) => {
      state.items = [];
    }
  }
});

// Tạo Redux store và đăng ký reducers
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
});

// Export các actions
export const { addItem, clearCart } = cartSlice.actions;

// Xác định types cho RootState và AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
