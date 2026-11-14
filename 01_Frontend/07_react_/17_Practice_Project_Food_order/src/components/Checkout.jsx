import Modal from "./UI/Model.jsx";
import { use, useActionState } from "react";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import useHttp from "./hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = use(CartContext);

  const userProgressCtx = use(UserProgressContext);

  //   const { data, loading, error, sendRequest, clearData } = useHttp("http://localhost:3000/orders", requestConfig);
  const { data, error, sendRequest, clearData } = useHttp("http://localhost:3000/orders", requestConfig);

  const cartTotal = cartCtx.items.reduce((totalprice, item) => totalprice + item.price * item.quantity, 0);

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }
  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     const fd = new FormData(event.target);
  //     const customerData = Object.fromEntreis(fd.entries());
  //     fetch("http://localhost:3000/orders", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         oreder: {
  //           items: cartCtx.items,
  //           customer: customerData,
  //         },
  //       }),
  //     });
  //   }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     const fd = new FormData(event.target);
  //     const customerData = Object.fromEntries(fd.entries());
  //     sendRequest(
  //       JSON.stringify({
  //         order: {
  //           items: cartCtx.items,
  //           customer: customerData,
  //         },
  //       }),
  //     );
  //   }

  // using action state
  async function checkoutAction(prevState, fd) {
    const customerData = Object.fromEntries(fd.entries());
    await sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    );
  }
  const [, formAction, loading] = useActionState(checkoutAction);

  let actions = (
    <>
      <Button textOnly type="button" onClick={handleCloseCheckout}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );
  if (loading) {
    actions = <span>Sending order data...</span>;
  }
  if (data && !error) {
    return (
      <Modal open={userProgressCtx.progress === "checkout"} onClose={handleFinish}>
        <h2>Sucess !</h2>
        <p>Your order was submitted sucessfully </p>
        <p>We will get back to you with more details via email within the next few minutes.</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }
  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleCloseCheckout}>
      {/* <form onSubmit={handleSubmit}> */}
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <Error title="Failed to submit order." message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}