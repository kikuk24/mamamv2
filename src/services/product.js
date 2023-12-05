// ? Library
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ! Mengambil data product
export const getProduct = createAsyncThunk(
  "getProduct",async () => {
    
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data
  }
)

// ! Slice
const products = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.loading = false;
    });
  }
});
export default products.reducer