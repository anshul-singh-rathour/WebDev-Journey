console.log("parameters in javascript");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// default parameters
//old syntax
function rolldie(numsSide){
    if(numsSide===undefined){
        numsSide=6;
    }
    return Math.floor(Math.random()*numsSide)+1;
}
// new syntax
function nrolldie(numsSide=6){
    return Math.floor(Math.random()*numsSide)+1;
}
console.log(rolldie());
console.log(nrolldie());

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// spread 
// without spread
let numssprd=[2,4,5,66,7,];
console.log(Math.min(numssprd));
// but with spread 
console.log(Math.min(...numssprd));
///////////////////////
console.log(numssprd);
console.log(...numssprd);
console.log("heillo");
console.log(..."heillo");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// rest 
function num(){
    console.log(arguments);
}
sum(1,2,3,45,5,5);
// actal use of rest 
function sum(...nums){
    return nums.reduce((total,el)=>{return total+el;});
}
console.log(sum(2,3,45,6,6,6,5));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// destructure array
let race = [ 23,45,5,6,7,5,3];
let [gold , silver , bronze , ...everyoneElse]=race;
console.log(gold);
console.log(silver);
console.log(bronze);
console.log(everyoneElse);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// destructure objects
const user = {
email: 'harvey@gmail.com',
firstName: 'Harvey',
lastName: 'Milk',
born: 1930,
died: 1978,
bio: 'Harvey Bernard Milk was an American politician and the first openly',
city: 'San Francisco',
state: 'California'
}

let{email:gmail,state,city,bio:abouthim,firstName="N/A",password="N/A"}=user;
console.log(gmail);
console.log(password);
console.log(firstName);
console.log(abouthim);
console.log(city);


// fuction destructure
function fullname({firstName="not",lastName:last}=user) {
    return firstName+last;
}
console.log(fullname());