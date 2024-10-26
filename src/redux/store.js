import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import cartReducer from "./cart/slice";
import userReducer from "./user/slice";

const store = configureStore({
  reducer: {
    userReducer,
    cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
