console.log ("Functions in javascript");


// 1st function
function singSong(){
    console.log("Ugh ........ ");
    console.log("Do");
    console.log("RE Mi");

}
singSong();

// arguments in functions
function greet(person){
    console.log(`Hi, ${person } . Have a great day.`);
}

greet("Himang");
greet("Anshul");

// muliple arguments (order matter)
function greet( firstname , lastname){
    console.log(`Hi, ${firstname+lastname} . Have a great day.`);
}

greet("Anshul", "Singh");


// return keyword
function add(x,y){
    return x+y;
}
console.log(add(3,4));
let submission= add(7,4);
console.log(submission);



// scopes in javascript 

// function scope
let totalEggs = 0;
function collectEggs() {
    let totalEggs =6;
   console.log(totalEggs);
}
console. log(totalEggs) ;
collectEggs ();
console. log(totalEggs) ;
// variables in function only use in fn 
// variable defined as global and do not redifined can be used inside fn


// block scope vairbles inside a {}(block) can be use in the block
if(2<5){
     let xo=24;
    let old = 109;
}
// console.log(xo);
// console.log(old);


// lexical scope variable defined in a outer fn can be acessed by inner function but vice versa not true

function bankrobery(){
  let  heros = ['spiderman','batman', 'ironman','superman'];
  function cry(){
    function inner(){
        for(let h of heros){
            console.log(`help me ${h.toUpperCase()}`);
        }
  }
  inner();
  }
  cry();
}

bankrobery();


// function expression 
const sub= function (x, y){
return x - y;
}
console.log(sub(5,2));


// higher order function 
function callback(func){
   for(let i =0; i<10 ;i++){
       func();
   }
}
function random(){
    let roll = Math.floor(Math.random()*6)+1;
    console.log(roll);
}

callback(random);


// returning function  return function with in a function 
function makeMystryfunc(){
      let nest =Math.random();
      if(nest<0.5){
        return function(){
            console.log("hey big win ");
            console.log("congrats");
        }
      }else{
        return function(){
            console.log("loses everything try later");
        }
      }
}
let answer = makeMystryfunc();
answer();

// same with arguments important
function ages (min ,max){
    return function(num){
        return num>=min && num<=max;
    }
}

let child = ages(10,20);
 console.log(child(14));

