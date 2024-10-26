import CartActionsTypes from "./actions-types";

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionsTypes.ADD_PRODUCT:
      const hasProduct = state.products.some(
        (product) => product.id === action.payload.id
      );
      if (hasProduct) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity:
                    product.quantity < 10
                      ? product.quantity + 1
                      : product.quantity,
                }
              : product
          ),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };

    case CartActionsTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter(
            (product) => product.id !== action.payload
          ),
        ],
      };

    case CartActionsTypes.INCREASE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity:
                  product.quantity < 10
                    ? product.quantity + 1
                    : product.quantity,
              }
            : product
        ),
      };

    case CartActionsTypes.DECREASE_PRODUCT:

      if(action.payload.quantity === 1) {
        return {
          ...state,
          products: [
            ...state.products.filter(
              (product) => product.id !== action.payload.id
            ),
          ],
        };
      }

      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                quantity:
                  product.quantity > 0
                    ? product.quantity - 1
                    : product.quantity,
              }
            : product
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
