import { useSelector } from "react-redux";

// Styles
import * as Styles from "./styles";

import CartItem from "../cart-item/index";
import { selectPriceTotal } from "../../redux/cart/cart.selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const { products } = useSelector((state) => state.cartReducer);

  const priceTotal = useSelector(selectPriceTotal);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {products.map((product, i) => (
          <CartItem product={product} key={i}></CartItem>
        ))}

        <Styles.CartTotal>Total: R$ {priceTotal}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
