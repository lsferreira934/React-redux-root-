import { useState } from "react";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsCount } from "../../redux/cart/cart.selectors";
import { login, logout } from "../../redux/user/slice";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((state) => state.userReducer);
  const totalProductInToCart = useSelector(selectProductsCount);

  const dispatch = useDispatch();

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(
      login({
        name: "Leandro",
        email: "leandrosf934@gmail.com",
      })
    );
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };
  console.log(currentUser)
  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho({totalProductInToCart})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
