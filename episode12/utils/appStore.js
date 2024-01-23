import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./cartSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducers,
  },
});
export default appStore;
