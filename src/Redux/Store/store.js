// store.js

import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../Reducer/rootreducer";
import cartReducer from "../Reducer/cartReducer";

const store = configureStore({
  reducer: {
    cart:cartReducer
  }
});

export default store;
