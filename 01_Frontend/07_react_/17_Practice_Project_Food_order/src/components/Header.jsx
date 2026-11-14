import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext.jsx";
import { use } from "react";
import UserProgressContext from "../store/UserProgressContext.jsx";
export default function Header() {
  const cartCtx = use(CartContext);
  const progressCtx = use(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberofItems, item) => {
    return totalNumberofItems + item.quantity;
  }, 0);

  function handleShowCart() {
    progressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A resturant" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart {totalCartItems !== 0 && "(" + totalCartItems + ")"}
        </Button>
      </nav>
    </header>
  );
}