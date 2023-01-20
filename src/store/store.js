import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./../ProductsPage/productSlice";
import  cartSlice  from "../Cart/cartSlice";
export const store = configureStore({
    reducer:{
        getProducts : productSlice,
        cart:cartSlice
    }
})