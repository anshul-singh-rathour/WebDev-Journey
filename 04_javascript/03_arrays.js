console.log(" Arrays (1st Datastructure)  in javascript");

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

// Arrays
let color=[];
console.log(color);
color[0]="red";
color=["blue" , "greeen", true , NaN ,undefined ];
 console.log(color);
 color[10]="hello";
 console.log(color);


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
 
