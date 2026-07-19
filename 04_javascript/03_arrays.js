console.log(" Arrays (1st Datastructure)  in javascript");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// truthy and falsy in javascript 
// these value will always have false value in js
if(false){
    console.log(ture);
}else{
    console.log(false);
}
if(0){
    console.log(ture);
}else{
    console.log(false);
}
if(""){
    console.log(ture);
}else{
    console.log(false);
}
if(null){
    console.log(ture);
}else{
    console.log(false);
}
if(undefined){
    console.log(ture);
}else{
    console.log(false);
}
if(NaN){
    console.log(ture);
}else{
    console.log(false);
}
// except these all other have truthy values 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// and and or operator in javascript
//   && (and) operator  
// || (or) operator
// ?? (nullish coalescing operator)  only check for null and undefined values
//   use to check multiple conditions in if else statement
// they can also be used to short circuiting in javascript
// short-circuiting using || operator
// if difeerent data types are used in and or operator then they will be 
// converted to boolean value and then check the condition
// and first true value will be returned and if all are true then last value will be returned
// Use ANY data type, return ANY data type,
console. log(3 || 'Jonas');
console. log('' || 'Jonas');
console. log(true || 0);
console. log(undefined || null);
console. log (undefined||0||""||'Hello' || 23 || null);
// short-circuiting using && operator
// just oposite of || operator, first false value will be returned 
// and if all are true then last value will be returned
console.log(3 && 'Jonas');
console.log('' && 'Jonas');
console.log(true && 0);
console.log(undefined && null);
console.log (undefined && 0 && "" && 'Hello' && 23 && null);
//  short-circuiting using ?? operator
// returns the first defined value (not null or undefined) from a list of values.
//  If all values are null or undefined, it returns the last value.
// nullish values are only null and undefined, other falsy values like 0, '', false are considered defined.
console.log(3 ?? 'Jonas');
console.log('' ?? 'Jonas');
console.log(true ?? 0);
console.log(undefined ?? null);
console.log (undefined ?? 0 ?? "" ?? 'Hello' ?? 23 ?? null);

// we can use these operators as assignments as well
// or assignment operator (||=) and and assignment operator (&&=) and nullish assignment operator (??=)
let a = 0;
a ||= 10;
console.log(a); // Output: 10 (since 0 is falsy, a is assigned 10)

let b = 5;
b &&= 20;
console.log(b); // Output: 20 (since 5 is truthy, b is assigned 20)

let c = null;
c ??= 15;
console.log(c); // Output: 15 (since null is nullish, c is assigned 15) 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Arrays
let color=[];
console.log(color);
color[0]="red";
color=["blue" , "greeen", true , NaN ,undefined ];
 console.log(color);
 color[10]="hello";
 console.log(color);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 // stack 
 let an = [1, 3, 4, 5,6 ];
 an.push(2);
 an.push(4,5,6,7,1,3);
 console.log(an);
 let rem = an.pop();
an.pop();
an.pop();
an.pop();
an.pop();
an.pop();
an.pop();
an.pop();
console.log(rem);
console.log(an);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// queue 
an.unshift(2,3,4,4,5);
console.log(an);
an.shift();
let reme=an.shift();
an.shift();
an.shift();
an.shift();
an.shift();
console.log(reme);
console.log(an);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// other function on arrays
console.log(an.concat(an));//combine
console.log(an.includes(3));// check if includes
let ans= "Blue";
console.log(ans.indexOf('b'));
console.log(ans.indexOf('B'));// give index or -1
console.log(an);
console.log(an.reverse());//reverse
let colors = ["red","orange","yellow","green","blue","indigo","violet"];
colors.splice(5,0,"pink");   // delete multiple and insert multiple
colors.splice(5,3,"bluish","ridish","pinkish");
console.log(colors);
 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// refrence types and testing 
let arr1= [2,3];
let arr2 = [2,3];
console.log(arr1===arr2);
//but
let arr3 = arr1;
console.log(arr3===arr1);
arr3[0]=100;
console.log(arr3);
console.log(arr1===arr3);

//// multidimension  arrays / nested arrays
let tic  = [['X','O',"X"],["O",null,'X'],['O','O','X']];
console.log(tic);
console.log(tic[1]);
console.log(tic[1][1]);
 
