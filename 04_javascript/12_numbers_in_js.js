console.log("Numbers in JS");

console. log(23 === 23.0);

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console. log(0.1 + 0.2 === 0.3);  // give false

// Conversion
console. log(Number('23'));
console. log(+'23');

// Parsing
console. log(Number.parseInt('30px',10));
console. log(Number.parseInt('e23',10));  // give NaN
console. log(Number.parseInt('1001',2));  // give 9

console. log(Number.parseFloat('2.5rem'));


// check if value is NaN
console. log(Number.isNaN(20));
console. log(Number.isNaN('20'));
console. log(Number.isNaN(+'20X'));
console. log(Number.isNaN(23/0));

// check if value is number
console. log(Number.isFinite(20));
console. log(Number.isFinite('20'));
console. log(Number.isFinite(+'20X'));
console. log(Number.isFinite(23/0));

// Math object and rounding
console. log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console. log(Math.max(5, 18, 23, 11, 2));
console. log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console. log(Math.min(5, 18, 23, 11, 2));

console. log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() *6) +1);


// we can also create our own random number generator function
const randomInt = (min,max)=>{ 
    return Math.floor(Math.random()*(max-min+1)+min);
}
randomInt(1,6); // gives no between 1 and 6 


// Rounding integers
console. log(Math.round(23.3));//23
console. log(Math.round(23.9));//24

console. log(Math.ceil(23.3));//24
console.log(Math.ceil(23.9));//24

console. log(Math.floor(23.3));  //23
console. log(Math.floor('23.9')); //23

console. log(Math.trunc(23.3));  //23
console. log(Math.trunc(23.9));  //23

console. log(Math.trunc(-23.3));  //23
console. log(Math.floor(-23.3));  //24

// Rounding decimals
console. log((2.7).toFixed(0));
console. log((2.7).toFixed(3));
console. log((2.345).toFixed(2));
console. log(+(2.345).toFixed(2));  // convert string to number

// number separators
// 287,460,000,000
const diameter = 287_460_000_000;
console. log(diameter) ;

const price = 345_99;
console. log(price) ;

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console. log(PI) ;

console. log(Number('2301000'));

// big int 

console.log(2 ** 53 - 1);
console. log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console. log(4838430248342043823408394839483204n);
console. log(BigInt(48384302));

// Operations
console.log(10000n + 10000n);
console. log(36286372637263726376237263726372632n *
10000000n);

const huge = 20289830237283728378237n;
const num = 23;
console. log(huge * BigInt(num));
// exception
console. log(20n > 15);
console. log(20n === 20);
console. log(typeof 20n);
console. log(20n == '20');

console. log(huge + ' is REALLY big!!!');

console.log(11n/3n);


// create dates
const n = new Date();
console.log(n);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
console.log(now.toISOString());

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime() );
console.log(new Date(2142256980000));
console.log(Date.now());    
future.setFullYear(2040);
console.log(future);

// date time in javascript
// Experimenting API
const now = new Date();
const options = {
hour: 'numeric',
minute: 'numeric',
day: 'numeric',
month: 'long',
year: 'numeric',
weekday: 'long',
};
const locale = navigator. language;
console. log (locale);
labelDate. textContent = new Intl. DateTimeFormat('en-GB', options). format(now) ;


const num = 3884764.23;

const options ={
style: 'currency',
unit: 'celsius',
currency: 'EUR',
// useGrouping: false,
}
console. log('Syria: ', new Intl.NumberFormat('ar-SY', options).format (num) ) ;
console. log('US:', 'en-US', new Intl.NumberFormat('en-US', options).format(num) );
console. log('Germany: ', new Intl.NumberFormat('de-DE', options).format (num) ) ;
console. log(navigator. language,new Intl.NumberFormat(navigator. language, options).format (num) );

// timer and timeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout((ing1, ing2) => console. log(`Here is your pizzawith ${ing1} and ${ing2} `),3000,... ingredients);
console. log('Waiting ... ');

if (ingredients. includes('spinach' )) clearTimeout
(pizzaTimer);

// time interval

// setInterval
setInterval(function () {
const now = new Date();
console. log(now) ;
}, 1000);