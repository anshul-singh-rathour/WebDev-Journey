/// print syntax in console class many other function also in console
console.log("DATA TYPES OF JAVASCRIPT");


// variables 
let a = 23; // can be change after initialization
const b = 25; // do not change after initialization
a= 27;
// b= 4; not possible 
console.log(a);
console.log(b);

// data types
//1>>>   numbers
console.log(2+3);
console.log(2**3);
let c=1;
console.log(typeof(c));
console.log (typeof (NaN));// used to define not a number 


// 2>>>   boolean
let d = true;
let e  = false;
console.log(d+e+d);

// 3>> String 
let f = "Animal";
let g = 'Animal';
 let gg = `animals of the kingdom`;
console.log(f[0]);
console.log(f.length);
let h=f+'lol'+1;
console.log(f);
console.log(h);
// methods for string
let i =h.toUpperCase();
console.log(i);
i=i.toLowerCase();
console.log(i);
i=i+'    ';
console.log(i);
i.trim();
console.log(i);
console.log(i.indexOf("l"));
console.log(i.slice(2,5));
let j = i.replace("lol","haha");
console.log(j);
// string temoplate litreral 
let k = `I do not eat ${3+4+6}  cahpaties`;


// 4>> NUll  // intentional declaration of any value
let l = null;
console.log(l);

// 5 >> Undefined // variables that do not defined
let m;
let n ;
console.log(m);
console.log(n);