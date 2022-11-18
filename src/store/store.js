import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import prodcutsSlic from "./prodcutsSlic";
const store = configureStore({
    reducer:{
        cart: cartReducer,
        product:prodcutsSlic
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export default store;