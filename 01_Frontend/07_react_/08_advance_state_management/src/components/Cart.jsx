// two methods to use cnstext first is use and second is consumer
import { use } from "react"; // 1st

import { CartContext } from "../store/shopping-cart-context"; // 1stand 2nd
export default function Cart() {
  const cartCtx = use(CartContext); // 1st

  const totalPrice = cartCtx.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {cartCtx.items.length === 0 && <p>No items in cart!</p>}
      {cartCtx.items.length > 0 && (
        <ul id="cart-items">
          {cartCtx.items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => cartCtx.updateItemQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => cartCtx.updateItemQuantity(item.id, 1)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}

//  2nd method do not use this method use first as more reliable
//   <CartContext.Consumer>
//     {(cartCtx) => {
//       const totalPrice = cartCtx.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
//       const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

//       return (
//         <div id="cart">
//           {cartCtx.items.length === 0 && <p>No items in cart!</p>}
//           {cartCtx.items.length > 0 && (
//             <ul id="cart-items">
//               {cartCtx.items.map((item) => {
//                 const formattedPrice = `$${item.price.toFixed(2)}`;

//                 return (
//                   <li key={item.id}>
//                     <div>
//                       <span>{item.name}</span>
//                       <span> ({formattedPrice})</span>
//                     </div>
//                     <div className="cart-item-actions">
//                       <button onClick={() => onUpdateItemQuantity(item.id, -1)}>-</button>
//                       <span>{item.quantity}</span>
//                       <button onClick={() => onUpdateItemQuantity(item.id, 1)}>+</button>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>
//           )}
//           <p id="cart-total-price">
//             Cart Total: <strong>{formattedTotalPrice}</strong>
//           </p>
//         </div>
//       );
//     }}
//   </CartContext.Consumer>;
// }
