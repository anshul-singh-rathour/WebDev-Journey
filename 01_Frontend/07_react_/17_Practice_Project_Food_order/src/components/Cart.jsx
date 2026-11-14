import Modal from "./UI/Model.jsx";
import { use } from "react";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";
export default function Cart() {
  const cartCtx = use(CartContext);
  const userProgressCtx = use(UserProgressContext);
  const cartTotal = cartCtx.items.reduce((totalprice, item) => totalprice + item.price * item.quantity, 0);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleOpenCheckout() {
    userProgressCtx.showCheckout();
  }
  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"} onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => {
          return <CartItem key={item.id} item={item} onDecrease={cartCtx.removeItem} onIncrease={cartCtx.addItem} />;
        })}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && <Button onClick={handleOpenCheckout}>Go to Checkout</Button>}
      </p>
    </Modal>
  );
}