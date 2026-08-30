console.log("loops in javascript");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// loops 

// // for loop
// for(let i =0; i<10 ; i++){
//     console.log("hello there");
// }

// // while loop 
// let num=0;
// while(num<10){
//     console.log(num);
//     num++;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// guess game 
// let  maximum = parseInt(prompt("Enter your maximum number."));
// while(!maximum){
//     maximum=parseInt(prompt("Enter a valid number !"));
// }
// let targetNum = Math.floor(Math.random()*maximum)+1;
// console.log(targetNum);
// let guess = prompt("Enter your first guess! (Type 'q' to quit )");
// let count;
//     count=1;
// while (parseInt(guess)!==targetNum){
//     if(guess==="q"){
//         break ;
//     }
//     guess=parseInt(guess);
//     if(guess<targetNum){
//         guess= (prompt("Too low ! Enter a new guess"));
//     count++;
//     }else if (guess>targetNum){
//      guess= (prompt("Too high ! Enter a new guess"));
//     count++;
//     }else{
//         guess=prompt("Invalid input ! Please enter a valid number or 'q' to quit");
//     }
// }
// if(guess==="q"){
//     console.log("Ok You quit !")
// }else{
// console.log(`You got it ! You took ${count} gueses`);
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// for of loop (use on iterables like array or string )

// let students = ["A","B","C","D"];
// for( let stu of students ){
//     console.log(`Student name ${stu}`);
// }

// for( let char of "Hello my name is Anshul"){
//     console.log(char);
// }


// for in loop (use on uniterable like objects ) 
// const testScores = {
// keenan: 80,
// damon: 67,
// kim: 89,
// shawn: 91,
// marlon: 72,
// dwayne: 77,
// nadia: 83,
// elvira: 97,
// diedre: 81,
// vonnie: 60
// }

// for(let cases in testScores){
//     console.log(`Student ${cases} got  ${testScores[cases]}`);
// }
// console.log(Object.keys(testScores));
// console.log(Object.values(testScores));
// console.log(Object.entries(testScores));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// to do list project 

let input = prompt("what would you like to do ?");
const todos = [];
while(input !== "quit" && input !=="q"){
    if (input === "new" ){
        const newtodo = prompt("Ok , what is the new todo ?");
        todos.push(newtodo);
        console.log(`${newtodo} is added to list`)
    }
    else if (input === "list" ){
        console.log("*************************");
              if(todos.length===0){
                console.log("Empty list")
              }
              for(let i =0; i<todos.length;i++){
                console.log(`${i} : ${todos[i]}`);
              }
        console.log("*************************");
    }
    else if (input ==="delete" ){
        let index = parseInt(prompt("OK , enter the index to delete"));
        if(!Number.isNaN(index)){
            if(index<0 || index>=todos.length){
                console.log("index do not exist");
            }else{
        let deleted = todos.splice(index,1);
        console.log(`Ok , deleted ${deleted}`);
            }
    }else{
        console.log("Invalid Index !");
    }
}
     input = prompt("what would you like to do ?");   
}
console.log("OK QUIT THE APP");