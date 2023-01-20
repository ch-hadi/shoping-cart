import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiCall } from "../util/apicall";

export const GetProducts = createAsyncThunk('product/products', async(ThunkApi)=>{
    let url = "https://dummyjson.com/products"
    let data = await ApiCall(url)
    return data?.products
})

export const productSlice = createSlice({
    name : 'products',
    initialState:{
    products:'',
    isLoading:false,
    isSuccess:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(GetProducts.pending, (state , action)=>{
            state.isLoading = true;
            state.isSuccess=false
         })
        builder.addCase(GetProducts.fulfilled, (state , action)=>{
           state.products = action.payload
           state.isLoading = false;
           state.isSuccess=true
           
        })
        builder.addCase(GetProducts.rejected, (state , action)=>{
            state.isLoading = false;
            state.isSuccess=false
         })
    }
})

export default productSlice.reducer