import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const hasProduct = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (hasProduct) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                quantity:
                  product.quantity < 10
                    ? product.quantity + 1
                    : product.quantity,
              }
            : product
        );
        return;
      }

      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },
    removeProduct: (state, action) => {
      state.products = [
        ...state.products.filter((product) => product.id !== action.payload),
      ];
    },
    increaseProduct: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? {
              ...product,
              quantity:
                product.quantity < 10 ? product.quantity + 1 : product.quantity,
            }
          : product
      );
    },
    decreaseProduct: (state, action) => {
      if (action.payload.quantity === 1) {
        state.products = [
          ...state.products.filter(
            (product) => product.id !== action.payload.id
          ),
        ];
      }

      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? {
              ...product,
              quantity:
                product.quantity > 0 ? product.quantity - 1 : product.quantity,
            }
          : product
      );
    },
  },
});

export const { addProduct, removeProduct, increaseProduct, decreaseProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
