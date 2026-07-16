console.log("Objects (2nd datastructure) in javascript ");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// objects 
// creating objects 
// usually const is prefred
const comment = {username:"Anshul",downloads:194,tags:["#funny","hilarious"],isavailable:false, false: 123, 45:"ans"};
console.log(comment);

// getting out the info 
// []
console.log(comment["username"]);
// .
console.log(comment.username);
// we can also use anather variable (but only with [])
let login="username";
console.log(comment[login]);
console.log(comment["down"+"loads"]);
console.log(comment["45"]);
console.log(comment.false);

//  updating 
comment.username="aman";
console.log(comment);
//  adding information 
comment.lastname="singh";
console.log(comment);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// arrays+objects
const exam = [
{username: 'Tammy', text: 'lolololol', votes: 9},
{username: 'FishBoi', text: 'glub glub', votes: 12387}
];
console.log(exam[1]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// nested objects
const student ={
    firstname: "david",
    lastname: 'singh',
    exam:{ midterm :  92, endterm : 94}
}
console.log(student);


