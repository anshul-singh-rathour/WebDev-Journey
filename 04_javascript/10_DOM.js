// dom manuplation
// console.log(document.querySelector(".message").textContent)
// document.querySelector(".message").textContent = "🎉 Correct Number!"
// document.querySelector(".number").textContent = 13
// document.querySelector(".score").textContent = 10

// document.querySelector(".guess").value = 23
// console.log(document.querySelector(".guess").value) 

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //  guess game with functions 

// let guessNo = Math.trunc(Math.random()* 20 ) + 1;
// let score = 20;
// let highScore = 0;
// document.querySelector(".check").addEventListener("click", function (){
//   let guess = Number(document.querySelector(".guess").value)

// //   check button click
// //   if not a number
//   if (!guess){
//     document.querySelector(".message").textContent = "⛔ No number!";
//   }
// //   if guess is correct
//   else if (guess === guessNo){
//     document.querySelector(".message").textContent = "🎉 Correct Number!";
//     document.querySelector(".number").textContent = guessNo;
//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";
//     if (score > highScore){
//         highScore = score;
//         document.querySelector(".highscore").textContent = highScore;
//     }
//   }
// //   if guess is wrong
//   else {  
//         if (score > 1) { 
//             document.querySelector(".message").textContent = guess > guessNo ? "📈 Too high!" : "📉 Too low!";
//              score--;
//         document.querySelector(".score").textContent = score;
//         }
//         else{
//             document.querySelector(".message").textContent = "💥 You lost the game!";
//             score--;
//             document.querySelector(".score").textContent = 0;
//             document.querySelector("body").style.backgroundColor = "#5c3131";
//             document.querySelector(".check").disabled = true;
//         }
   
//   }
// } )

// // again button click
// document.querySelector(".again").addEventListener("click", function (){
//     score = 20;
//     guessNo = Math.trunc(Math.random()* 20 ) + 1;
//     document.querySelector(".message").textContent = "Start guessing...";
//     document.querySelector(".score").textContent = score;
//     document.querySelector(".number").textContent = "?";
//     document.querySelector(".guess").value = "";
//     document.querySelector("body").style.backgroundColor = "#222";
//     document.querySelector(".number").style.width = "15rem";
//     document.querySelector(".check").disabled = false;
// })


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // model site
// const showbutton=document.querySelectorAll(".show-modal");
// const closebutton=document.querySelector(".close-modal");
// const overlay=document.querySelector(".overlay");
// const modal=document.querySelector(".modal");

// const close=()=>{
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// }
// const open=()=>{
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
//  }

// for (let i=0;i<showbutton.length;i++){
//  showbutton[i].addEventListener("click",open)
// }

// closebutton.addEventListener("click",close)
// overlay.addEventListener("click",close)

// document.addEventListener("keydown",function(e){
//   if (e.key==="Escape" && !modal.classList.contains("hidden")){
//     close();
//   }
// })

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// pig game

