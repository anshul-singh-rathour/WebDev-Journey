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
// spered can be use on iterables strings,arrays,maps,sets but not objects
// but after es2018 now spread can be use on objects
const oh={"a":2,"b":3,"c":"d"}
const newoh={...oh,"t":6}
console.log(newoh);
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

// also can skip elements
let [a,,c,,d]=race;
console.log(a,c,d);
// switch using destructuring
[a,b]=[b,a];
// nested destructuring
const nested=[1,3,2,[4,5,6]];
let [i,,,[j,k,l],m=1,n=1]=nested;
console.log(i,j,k,l,m,n);


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

let{email:gmail,state,city,bio:abouthim,firstName="N/A",password="N/A",notexists:notFound=[]}=user;
console.log(gmail);
console.log(password);
console.log(firstName);
console.log(abouthim);
console.log(city);
console.log(notFound);

// reassingning in objects
let u=2,v=5,w=6;
const obj={u:23,v:27,w:20};
// now we cannot do {}=obj js interpretate it as code block
({u,v,w}=obj);
console.log(u,v,w)

// nested objexts
const openingHours={
    firday: {
            "open":2,
            "close":3},
    saturday:{
        "open":4,
        "close":7
    }
}
const {
fri: { open:o =2, close:c=2 }
} = openingHours;
console. log(o,c) ;

// fuction destructure
function fullname({firstName="not",lastName:last}=user) {
    return firstName+last;
}
console.log(fullname());