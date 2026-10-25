import { createContext, useState, useReducer } from "react";
// import { useState,  } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products.js";
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
  if (action.type === "ADD-ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === action.payload);
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex((item) => item.id === action.payload.productId);

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  return state;
}

export default function CartContextProvider({ children }) {
  // give same two things in array like useState
  const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {
    items: [],
  });

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD-ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }
  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };
  return <CartContext value={ctxValue}>{children}</CartContext>;
}
// updating everything using use state and it is good but if same state is managed or updated by many then we can use reducer to manage the state help to write more organised code

// export default function CartContextProvider({ children }) {
//   const [shoppingCart, setShoppingCart] = useState({
//     items: [],
//   });

//   function handleAddItemToCart(id) {
//     setShoppingCart((prevShoppingCart) => {
//       const updatedItems = [...prevShoppingCart.items];

//       const existingCartItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === id);
//       const existingCartItem = updatedItems[existingCartItemIndex];

//       if (existingCartItem) {
//         const updatedItem = {
//           ...existingCartItem,
//           quantity: existingCartItem.quantity + 1,
//         };
//         updatedItems[existingCartItemIndex] = updatedItem;
//       } else {
//         const product = DUMMY_PRODUCTS.find((product) => product.id === id);
//         updatedItems.push({
//           id: id,
//           name: product.title,
//           price: product.price,
//           quantity: 1,
//         });
//       }

//       return {
//         items: updatedItems,
//       };
//     });
//   }

//   function handleUpdateCartItemQuantity(productId, amount) {
//     setShoppingCart((prevShoppingCart) => {
//       const updatedItems = [...prevShoppingCart.items];
//       const updatedItemIndex = updatedItems.findIndex((item) => item.id === productId);

//       const updatedItem = {
//         ...updatedItems[updatedItemIndex],
//       };

//       updatedItem.quantity += amount;

//       if (updatedItem.quantity <= 0) {
//         updatedItems.splice(updatedItemIndex, 1);
//       } else {
//         updatedItems[updatedItemIndex] = updatedItem;
//       }

//       return {
//         items: updatedItems,
//       };
//     });
//   }
//   const ctxValue = {
//     items: shoppingCart.items,
//     addItemToCart: handleAddItemToCart,
//     updateItemQuantity: handleUpdateCartItemQuantity,
//   };
//   return <CartContext value={ctxValue}>{children}</CartContext>;
// }