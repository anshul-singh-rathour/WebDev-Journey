console.log("comparisions and conitional stattements in javascript");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Maht class in javascript 
// same as in java have different functions
console.log(Math.abs(2-3)); // absolute value
console.log(Math.PI);  // value of pie
console.log(Math.floor(22.5566));  // remove decimal 
console.log(Math.ceil(4.5));  // round off to next no
console.log(Math.random());  // give random value from 0 to 1
console.log(Math.floor(Math.random()*3)+1) // get random value between custom inputs without decimal

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// syntax and function for user prompt on webpage 
// alert("Hi do not press the button");
// prompt("enter a no ");

/// to convert string to integeruse 
// Number and parseInt
// Number convert whole string into no if not number character exists give NaN
let o = "111";
let p = Number(o);
console.log(p)
let q = "111a";
let r = Number(q);
console.log(r);

// parseInt extract only no from string if not number character apper stop and return result 

let s = "111";
let t = parseInt(s);
console.log(t);
let v= "111abcfbb1";
let w = parseInt(v);
console.log(w);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// comparision in javascript 
// 1>>>   >  (greater than )
console.log(2>5);

// 2>>>   <  (less than )
 console.log(2<5);

// 3>>>  >=  (greater than equal to  )
 console.log(2>=5);
 
// 4>>>   <=  (less than equal to )
 console.log(2<=5);

// 5>>>  == ( equality (equal to ) )
 console.log(2=="2");
 console.log(1==1);

 // 5>>>  != (not equality ( not equal to ) )
 console.log(2!=4);
 console.log(1!="1");

 // 6>>>  === ( strictly equal to )
 console.log(2=="2");
 console.log(1==1);

  // 6>>>  !== ( strictly not equal to )
 console.log(2!=="2");
 console.log(1!==1);
 console.log(1!=="1");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 // conditional statements 
 let x= 5; 
 let y =7;
 // if  else if  else  
 // if 
 if ( x==y){
    x++;
 }
 // else if 
 else if ( x>y ){
    y++;
 }
 // else 
else{
    x++;
    y++;
}

x= 3;
// switch case

switch(x){
    case(1):console.log("x==1");
    break;
       case(2):console.log("x==2");
    break;
       case(3):console.log("x==3");
    break;
       case(4):console.log("x==4");
    break;
       case(5):console.log("x==5");
    break;
       case(6):console.log("x==6");
    break;
 default:console.log(" x is unknown");
}

// if not use break all after one got true got exeecuted
switch(x){
    case(1):console.log("x==1");
       case(2):console.log("x==2");
       case(3):console.log("x==3");
       case(4):console.log("x==4");
       case(5):console.log("x==5");
       case(6):console.log("x==6");
 default:console.log(" x is unknown");
}

