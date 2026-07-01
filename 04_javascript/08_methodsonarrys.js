console.log("Methods on arrays");

// for each function
// method 1
const nums =[ 1,3,4,5,6,4,0,5,7,8];
// function power(el){
//     console.log(el*el);
// }
// nums.forEach(power);

// method 2 
// nums.forEach(function(el){
//     if(el%2===0){
//         console.log(el);
//     }
// });


// map 
let tot = nums.map(function(el){
    return (el**5);
})
console.log(tot);

// filters 
let newnums =nums.filter(n=>{return n%2==0});
console.log(newnums);

//every 
console.log(nums.every(el=>el%2===0));

//some
console.log(nums.some(el=>el%2===0));

// reduce

let arrw=[1,2,3,4,5,6,7];
let total = arrw.reduce((total,prices)=>{return total+prices;});
console.log(total);
let newtotal = arrw.reduce((total,prices)=>{return total+prices;},100);
console.log(newtotal);

// arrow keys 

const multiply = (x,y)=>{
    let c = 2;
    return x*y*c;
}
// return implicit
// const divide = (x,y)=>(x/y);
// or
const devide = (x,y)=>x/y;

// arrow and this 


 const person={
    firstname: "anshul",
    lastname: "singh",
    fullname(){
        return `${this.firstname} ${this.lastname}`;
    },
    shoutname: function(){
      setTimeout(()=>{console.log(this.fullname());},3000);  
    }
 }
console.log(person.fullname());
person.shoutname();
// // settimeout
// setTimeout(()=>{console.log("Hello")},3000);
// let id = setInterval(()=>{console.log(Math.random())},3000);
// // clearInterval(id);