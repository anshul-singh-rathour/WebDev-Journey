// console.log("Objects (2nd datastructure) in javascript ");
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // objects 
// // creating objects 
// // usually const is prefred
// const comment = {username:"Anshul",downloads:194,tags:["#funny","hilarious"],isavailable:false, false: 123, 45:"ans"};
// console.log(comment);

// // getting out the info 
// // []
// console.log(comment["username"]);
// // .
// console.log(comment.username);
// // we can also use anather variable (but only with [])
// let login="username";
// console.log(comment[login]);
// console.log(comment["down"+"loads"]);
// console.log(comment["45"]);
// console.log(comment.false);

// //  updating 
// comment.username="aman";
// console.log(comment);
// //  adding information 
// comment.lastname="singh";
// console.log(comment);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // arrays+objects
// const exam = [
// {username: 'Tammy', text: 'lolololol', votes: 9},
// {username: 'FishBoi', text: 'glub glub', votes: 12387}
// ];
// console.log(exam[1]);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // nested objects
// const student ={
//     firstname: "david",
//     lastname: 'singh',
//     exam:{ midterm :  92, endterm : 94}
// }
// console.log(student);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//  sets in javascript 

// const orderSet=new Set(["pasta" ,true ,"pasta",4,4 ,true,]) ;
// console.log(orderSet);
// let newSet = new Set("jonas");
// newSet.add("hello");
// newSet.add("hello");
// console.log(newSet.size);
// console.log(newSet);
// console.log(newSet.has("hello"));
// console.log(newSet.has("usv"));
// newSet.delete("hello");
// console.log(newSet);
// newSet.clear();
// console.log(newSet);

// let arr = [1,2,3,4,5,6,7,8,9];
// let arrSet = new Set(arr);
// console.log(arrSet);
// let arr2 = [...arrSet];
// console.log(arr2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  
const italianFoods = new Set([
'pasta',
'gnocchi',
'tomatoes',
'olive oil',
'garlic',
'basil',
]);

const mexicanFoods = new Set([
'tortillas',
'beans',
'rice',
'tomatoes',
'avocado',
'garlic',
]);

// union of two sets 
const union = new Set([...italianFoods, ...mexicanFoods]);
console.log(union);     

// intersection of two sets
const intersection = new Set([...italianFoods].filter(food => mexicanFoods.has(food)));
console.log(intersection);          

const commonFoods = italianFoods. intersection
(mexicanFoods);
console. log('Intersection:', commonFoods);
console. log([ ... commonFoods] ) ;

const italianMexicanFusion = italianFoods.union
(mexicanFoods) ;
console. log('Union:', italianMexicanFusion);

console. log([ ... new Set([ ... italianFoods,
mexicanFoods])]);

const uniqueItalianFoods = italianFoods.difference
(mexicanFoods);
console. log('Difference italian', uniqueItalianFoods);

const uniqueItalianAndMexicanFoods =
italianFoods.symmetricDifference(mexicanFoods);
console. log(uniqueItalianAndMexicanFoods);
any

console. log(italianFoods.isDisjoinFrom(mexicanFoods) );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Maps in javascript

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console. log(rest.set(2, 'Lisbon, Portugal'));

rest
set ( 'categories', ['Italian', 'Pizzeria',
'Vegetarian', 'Organic'])
.set('open', 11)
.set ('close', 23)
.set(true, 'We are open :D')
.set(false, 'We are closed :(');

console. log(rest. get('name'));
console. log(rest.get(true));
console. log(rest.get(1));

const time = 8;
console. log(rest.get(time > rest.get('open') && time
< rest.get('close')));

console. log(rest. has('categories')) ;
rest.delete(2);
rest.clear();|
console. log(rest) ;
console. log(rest.size);

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console. log(rest) ;
console. log(rest.size);

console. log(rest.get(arr));

/*
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console. log(rest) ;
console. log(rest.size);

console. log(rest.get(arr));

/*

// Convert object to map
console. log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours))

console. log(hoursMap) ;

// Quiz app
console. log(question.get('question'));
for (const [key, value] of question) {
if (typeof key === 'number') console. log(`Answer $
{key}: ${value}');

/*===

3

L

// const answer = Number(prompt('Your answer'));
const answer = 3;
console. log(answer) ;

console. log(question.get(question.get('correct')
answer));

// Convert map to array
console. log([ ... question] ) ;
console. log(question;

/*

1 Manc: Eundamentale
console. log([ ... question]) ;
console. log(question.entries());
console. log(question.keys());
console. log(question.values());
