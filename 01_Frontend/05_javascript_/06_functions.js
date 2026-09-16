// console.log ("Functions in javascript");

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 1st function
// function singSong(){
//     console.log("Ugh ........ ");
//     console.log("Do");
//     console.log("RE Mi");

// }
// singSong();

// // arguments in functions
// function greet(person){
//     console.log(`Hi, ${person } . Have a great day.`);
// }

// greet("Himang");
// greet("Anshul");

// // muliple arguments (order matter)
// function greet( firstname , lastname){
//     console.log(`Hi, ${firstname+lastname} . Have a great day.`);
// }

// greet("Anshul", "Singh");


// // return keyword
// function add(x,y){
//     return x+y;
// }
// console.log(add(3,4));
// let submission= add(7,4);
// console.log(submission);


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // scopes in javascript 

// // function scope
// let totalEggs = 0;
// function collectEggs() {
//     let totalEggs =6;
//    console.log(totalEggs);
// }
// console. log(totalEggs) ;
// collectEggs ();
// console. log(totalEggs) ;
// // variables in function only use in fn 
// // variable defined as global and do not redifined can be used inside fn


// // block scope vairbles inside a {}(block) can be use in the block
// if(2<5){
//      let xo=24;
//     let old = 109;
// }
// // console.log(xo);
// // console.log(old);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // lexical scope variable defined in a outer fn can be acessed by inner function but vice versa not true

// function bankrobery(){
//   let  heros = ['spiderman','batman', 'ironman','superman'];
//   function cry(){
//     function inner(){
//         for(let h of heros){
//             console.log(`help me ${h.toUpperCase()}`);
//         }
//   }
//   inner();
//   }
//   cry();
// }

// bankrobery();

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // function expression 
// const sub= function (x, y){
// return x - y;
// }
// console.log(sub(5,2));


// // higher order function 
// function callback(func){
//    for(let i =0; i<10 ;i++){
//        func();
//    }
// }
// function random(){
//     let roll = Math.floor(Math.random()*6)+1;
//     console.log(roll);
// }

// callback(random);


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // returning function  return function with in a function 
// function makeMystryfunc(){
//       let nest =Math.random();
//       if(nest<0.5){
//         return function(){
//             console.log("hey big win ");
//             console.log("congrats");
//         }
//       }else{
//         return function(){
//             console.log("loses everything try later");
//         }
//       }
// }
// let answer = makeMystryfunc();
// answer();

// // same with arguments important
// function ages (min ,max){
//     return function(num){
//         return num>=min && num<=max;
//     }
// }

// let child = ages(10,20);
//  console.log(child(14));


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // default parameters in function
// const bookings=[];

// const createBooking = function(flightNum, numPassengers=1, price=199*numPassengers){
//     // ES5 way
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;
//     let booking = {
//         flightNum,
//         numPassengers,  
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);    
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

// // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // if we want to call a function of a object on anather object 
// // then we can call it by call method 

// const airline1={
//     name: "Anshul",
//     class:10,
//     books(b1,b2,b3){
//         console.log(`${this.name} in ${this.class} have books ${b1},${b2},${b3}`)
//     }
// }
// // call method
// const airline2={
//     name:"Aryan",
//     class:11,
// }
// const book= airline1.books;
// book.call(airline2,"history","science","math");

// // apply method wecan pass arguments as array
// const sub=["history","science","math"];
// book.apply(airline2,sub);
// // other way
// book.call(airline2,...sub);
// // permanent bind this to new fn (bind keyword)
// const booksForA2=airline1.books.bind(airline2);
// booksForA2("history","science","math");

// // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // coding challenge 1
// const poll= {
// question: 'What is your favourite programminglanguage?',
// options: ['0: JavaScript', '1: Python', '2: Rust','3: C++'],
// //This.generates.[0, 0, 0, .0]. .More . in .the .next.section
// answers: new Array(4) .fill(0),
// registerNewAnswer(){
//     const answer=Number(prompt(`${this.question}\n${this.options.join('\n')}\n (Write option number)`));
//     typeof(answer)==='number' && answer<this.options.length && this.answers[answer]++;
//    this.displayResults();
//    this.displayResults("string");
// },
// displayResults(type="Array"){
//     if (type==="Array"){
//         console.log(this.answers);
//     }
//     else{
//         console.log(`Poll results are: ${this.answers.join(", ")}`);
//     }
// }
// }
// pollButton=document.querySelector(".pollbutton").addEventListener("click",poll.registerNewAnswer.bind(poll));
// poll.displayResults.call({answers:[5,2,3]},'string');
// poll.displayResults.call({answers:[1,5,3,9,6,1]},'string');
// poll.displayResults.call({answers:[5,2,3]});
// poll.displayResults.call({answers:[1,5,3,9,6,1]});

// // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// immediately invoked functional expressions

// const runOnce = function () {
// console. log('This will never run again');
// }
// runOnce();

// // IIFE
// (function () {
// console. log('This will never run again' )}
// )();
// (()=>console.log("This will never run again"))();

// // // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 // closures  

// const secureBooking= function () {
// let passengerCount = 0;

// return function () {
// passengerCount++;
// console. log(`${passengerCount} passengers`) ;
// }
// }
// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);


(function(){ 
const header = document.querySelector('h1');
header.style.color = 'red' ;
document.querySelector('body').addEventListener('click', function () {
header.style.color = 'blue' ;
})
})();