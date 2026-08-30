// Importing module
console. log('Importing module');
import { addToCart, totalPrice as price, tq } from './19_emodule.js';
// addToCart('bread', 5) ;
// console.log(price, tq);

// console.log(shippingCost);
import * as ShoppingCart  from './19_emodule.js';
ShoppingCart.addToCart('bread', 5);
console. log(ShoppingCart. totalPrice);

import add,{cart}  from './19_emodule.js' ;
add('bread',5);
add('bread',5);
add('bread',5);
add('bread',5);
add('bread',5);
// import is live if we change in an element it will be reflected
console.log(cart);

// we can also use await function in modules 

const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console. log (data) ;

// making public apis 
const ShoppingCart2 = (function () {
cart = [];
const shippingCost = 10;
const totalPrice = 237;
const totalQuantity = 23;

const addToCart = function (product, quantity) {
cart.push({ product, quantity });
console. log(`${quantity} ${product} added to cart` );
};
const orderStock = function (product, quantity) {
console. log(`${quantity} ${product} ordered from supplier `);
}
return{
addToCart,
cart,
totalPrice,
totalQuantity,
}})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console. log(ShoppingCart2) ;
console. log(ShoppingCart2.shippingCost);
