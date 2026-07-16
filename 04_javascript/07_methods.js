console.log("mehtods in javascript");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// methhods (functions on objects)

// method 
const myMath = {
    PI : 3.14 ,
    square: function(num){
        return num*num;
    },
    cube : function(num){
        return num**3;
    },
    quad(num){
        return num**4;
    }
}


console.log(myMath.square(2));
console.log(myMath.cube(2));
console.log(myMath.quad(2));



// this keyword 
let cat = {
    name: "stelee",
    age:2,
    color:"grey",
    meow(){
        console.log( this.color);
        // console.log(color); do not work 
    }
}

cat.meow();


// try catch 
function msg(str){
    try{
        str.toUpperCase();
    }
    catch(e){
        console.log(e);
        console.log("enter string next time");
    }
}
msg("hello");
msg(12444);
console.log("after that ");