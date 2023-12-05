import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./slices/counterSlices";
import productsReducer from "./slices/productSlices";
// Create Store
const store = configureStore({
  reducer: {
    products: productsReducer,
    counterSlice: counterSlice.reducer
    
  },
})
export default store