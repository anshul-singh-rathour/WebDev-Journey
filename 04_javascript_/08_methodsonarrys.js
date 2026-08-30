console.log("Methods on arrays");

//

// slice (create new array )
let a =['a','b','c','d','e','f','g','h'];
console.log(a.slice(5));
console.log(a.slice(2,5));
console.log(a.slice(-2));
console.log(a.slice(-5,-2));

// splice (change original array)
console.log(a.splice(2,3));
console.log(a);
console.log(a.splice(-2));
console.log(a);

// reverse (change original array)
a=['a','b','c','d','e','f','g','h'];
console.log(a.reverse());
console.log(a);

// concat (create new array)
let b = ['i','j','k','l'];
console.log(a.concat(b));
console.log(a);
console.log(b);

// join (create new array)
console.log(a.join(''));
console.log(a.join(' '));
console.log(a.join('-')); 

//  at notation
let c = [1,2,3,4,5,6,7,8];
console.log(c.at(2));
console.log(c.at(-1));
let str = "Hello World";
console.log(str.at(2));
console.log(str.at(-1));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// for each function
// method 1
const nums =[ 1,3,4,5,6,4,0,5,7,8];
function power(el){
    console.log(el*el);
}
nums.forEach(power);

console. log ( ' ---- FOREACH ---- ');
movements. forEach(function (nums, index, array) {
if (nums > 0) {
console. log(`You deposited ${nums}`);
} else {
console. log(`You withdrew ${Math.abs (nums) } `) ;
}
}
// method 2 
// nums.forEach(function(el){
//     if(el%2===0){
//         console.log(el);
//     }
// });

// for each with maps
const currencies = new Map([ 
['SD', 'United States dollar'],
['EUR', 'Euro'],
['GBP', 'Pound sterling']
]);
currencies.forEach(function(value, key, map){
    console.log(`${key}: ${value}`);
});

// // for each with sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach(function(value, _, map){
    console.log(`${value}: ${value}`);
});



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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Julia and Kate are doing a study on dogs. So each of
them asked 5 dog owners about their dog's age, and
stored the data into an array (one array for each) .
For now, they are just interested in knowing whether
a dog is an adult or a puppy. A dog is an adult if it
is at least.3.years old, and it's aypuppy if it's
less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays
of dog's ages ('dogsJulia' and 'dogsKate'), and does
the following things:

1. Julia found out that the owners of the FIRST and
the LAST TWO dogs actually have cats, not dogs! So
create a shallow copy of Julia's array, and remove
the cat ages from that copied array (because it's a
bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and
Kate's data
3. For each remaining dog, log to the console whether
it's an adult ("Dog number 1 is an adult, and is 5
years old") or a puppy ("Dog number 2 is still a
puppy
4. Run the function for both test datasets.
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's
data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9,,16, 6, 8, 3], Kate's
data [10, 5, 6, 1, 4].

*/
 const checkDogs = function(dogsJulia,dogsKate){
    actuallyJulia = dogsJulia.slice(1,-2);
    const dogs = actuallyJulia.concat(dogsKate);
    dogs.forEach(function(dog, i){
        if(dog>=3){
            console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
        } else {       
            console.log(`Dog number ${i+1} is still a puppy`);
        } 
 })
}
const test1 = checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
const test2 = checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// find method give first index wich satisfy a condition
let checkdogs=[9,16,66,8,3];
checkDogs.find((nov)=>nov==4);


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// the new findLast and findLastIndex 

let movements=[0,1,2,3,4,5,65,43,4,23,45,34,43,4,43,4,4-23,-34,453-1,8883,34,4];

console. log(movements) ;
const lastWithdrawal = movements.findLast(mov => mov < 0);
console. log(lastWithdrawal);

// 'Your latest large movement was X movements ago'

const lastestLargeMovementIndex = movements. findLastIndex(mov => Math.abs(mov) > 20)
console. log(lastestLargeMovementIndex);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// flat method used to make nested array simple
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console. log(arr.flat());
// increase the depth of flattening
const arrDeep = [[ [1, 2], 3], [4, [5,6]], 7,8];
console. log(arrDeep.flat(2));

// also use flat map to map and flat at same time but only one level deep

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// coding challenge

// YOUR TASKS:
// 1. Store th& the average weight of a "Husky" in a variable
// "huskyWeight"
// 2. Find the name of the only breed that likes both
// "running" and "fetch" ("dogBothActivities" variable)
// 3. Create an array "allActivities" of all the activities
// of all the dog breeds
// 4. Create an array "uniqueActivities" that contains only
// the unique activities (no activity repetitions). HINT: Use
// a technique with a special data structure that we studied
// a few sections ago.
// 5. Many dog breeds like to swim. What other activities do
// these dogs like? Store all the OTHER activities these
// breeds like to do, in a unique array called
// "swimmingAdjacent".
// 6. Do all the breeds have an average weight of 10kg or
// more? Log to the console whether "true" or "false".
// 7. Are there any breeds that are "active"? "Active" means
// that the dog has 3 or more activities. Log to the console
// whether "true" or "false".

// BONUS: What's the average weight of the heaviest breed
// that likes to fetch? HINT: Use the "Math.max" method along
// with the ... operator.

const breeds = [
{
breed: 'German Shepherd',
averageWeight: 32,
activities: ['fetch', 'swimming' ]
},
{
breed: 'Dalmatian',
averageWeight: 24,
activities: ['running', 'fetch', 'agility' ]
},
{
breed: 'Labrador',
averageWeight: 28,
activities: ['swimming', 'fetch' ]
},
{   
breed: 'Beagle',
averageWeight: 12,
activities: ['digging', 'fetch' ],
},
{
breed: 'Husky',
averageWeight: 26,
activities: ['running', 'agility', 'swimming' ]
},
{
breed: 'Bulldog',
averageWeight: 36,
activities: ['sleeping' ],
},
{
breed: 'Poodle',
averageWeight: 18,
activities: ['agility', 'fetch'],
}]

// 1
const huskyWeight = breeds.find(ebreed=>'Husky'===ebreed.breed).averageWeight;
console.log(huskyWeight);
//  2
const dogBothActivities = breeds.find(ebreed=>ebreed.activities.includes('running') && ebreed.activities.includes('fetch')).breed;
console.log(dogBothActivities);
// 3
const allActivities = breeds.flatMap(ebreed=>ebreed.activities);
console.log(allActivities);
// 4
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);
// 5
swimmingAdjacent = breeds.filter(ebreed=>ebreed.activities.includes('swimming')).flatMap(ebreed=>ebreed.activities).filter(activity=>'swimming'!==activity);
console.log([...new Set(swimmingAdjacent)]);
// 6
const allBreedsWeight = breeds.every(ebreed=>ebreed.averageWeight>=10);
console.log(allBreedsWeight);
// 7
const activeBreeds = breeds.some(ebreed=>ebreed.activities.length>=3);
console.log(activeBreeds);
// bonus
const heaviestBreedFetch = breeds.filter(ebreed=>ebreed.activities.includes('fetch')).map(ebreed=>ebreed.averageWeight);
console.log(Math.max(...heaviestBreedFetch));


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// sorting in javascript
// works directly on strings and original array is changed
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console. log(owners.sort());
console. log(owners) ;

// for numbers we need to pass a callback function
// Numbers
console. log (movements) ;
// return < 0, A, B (keep order)
// return > 0, B, A (witch order)
// Ascending
movements. sort((a, b) => {
if (a > b) return 1;
if (a < b) return -1;
});
console. log (movements) ;
movements. sort((a, b) => a - b);
console. log (movements) ;
// Descending
movements. sort((a, b) => {
if (a > b) return -1;
if (a < b) return 1;
});
console. log (movements) ;
movements. sort((a, b) => b - a);
console. log (movements) ;

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// grouping in javascript
console.log(movements);
const grouped = Object.groupBy(movements,mov=>mov>0?'deposits':'withdrawals');
console.log(grouped);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// fill method in javascript

const arr = [1, 2, 3, 4, 5, 6, 7];
console. log(new Array(1, 2, 3, 4, 5, 6, 7));

// Emprty arrays + fill method
const x = new Array(7);
console. log(x);
// console.log(x.map(()=>5));
x.fill(1, 3,5);
x.fill(1);
console. log(x);

arr.fill(23, 2, 6);
console. log(arr);

// Array.from
const y = Array.from({ length: 7}, () => 1);
console. log(y) ;

const z = Array. from({ length: 7 }, (_, i) => i + 1);
console. log(z);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Non-Destructive Alternatives: toReversed, toSorted,
// toSpliced, with

console. log (movements) ;
const reversedMov = movements. toReversed();
console. log(reversedMov) ;

// toSorted (sort), toSpliced (splice)

// movements[1]=2000;
const newMovements = movements.with(1, 2000);
console. log (newMovements) ;

console. log(movements) ;