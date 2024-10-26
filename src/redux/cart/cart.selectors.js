export const selectProductsCount = (state) => {
  return state.cartReducer.products.reduce(
    (acc, current) => acc + current.quantity,
    0
  );
};

export const selectPriceTotal = (state) => {
  return state.cartReducer.products.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );
};
