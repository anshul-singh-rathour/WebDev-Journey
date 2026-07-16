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

// // pig game


// // seclecting elements 
// let player0el=document.querySelector(".player--0");
// let player1el=document.querySelector(".player--1");
// let score0el=document.getElementById("score--0");
// let score1el=document.getElementById("score--1");
// let diceImage=document.querySelector(".dice");
// let rollButton = document.querySelector(".btn--roll");
// let newButton = document.querySelector(".btn--new");
// let holdButton = document.querySelector(".btn--hold");
// let current0el=document.getElementById("current--0");
// let current1el=document.getElementById("current--1");
// let Scores,currentScore,activePlayer;


// // set conditions
// const set=function(){    
//     // set UI
//     score0el.textContent = 0;
//     score1el.textContent = 0;
//     current0el.textContent = 0;
//     current1el.textContent = 0;

//     // set scores
//     Scores = [0,0];
//     currentScore = 0;
//     activePlayer = 0;
    

//     // set player classes
//     player0el.classList.remove("player--winner");
//     player1el.classList.remove("player--winner");
//     player1el.classList.remove("player--active");
//     player0el.classList.add("player--active");
//     diceImage.classList.add("hidden");
    
//     // set buttons
//     rollButton.disabled = false;
//     holdButton.disabled = false;
// }

// set();

// // switch player function
// const switchPlayer = function(){
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     currentScore = 0;
//     activePlayer=activePlayer === 0 ? 1 : 0;
//     player0el.classList.toggle("player--active");
//     player1el.classList.toggle("player--active");
// }

// // roll dice 
// rollButton.addEventListener("click",function(){
//     //  roll
//     const rolled= Math.trunc(Math.random() * 6) + 1; 
//     // show dice image
//      if (diceImage.classList.contains("hidden")) {
//     diceImage.classList.remove("hidden");
//     }
//     // change to obtained image
//     diceImage.src = `dice-${rolled}.png`;

//     // check for rolled 1
//     if (rolled !== 1){
//      currentScore += rolled;
//      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//     }
//     // switch player
//     else{
//      switchPlayer();
//     }
//     })

// // hold button
// holdButton.addEventListener("click",function(){

//     // add current score to active player score
//     Scores[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent = Scores[activePlayer];

//     // check if player won
//     if (Scores[activePlayer] >= 100){
//         document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
//         document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
//         diceImage.classList.add("hidden");
//         rollButton.disabled = true;
//         holdButton.disabled = true;
//     }
//     else{
//       switchPlayer();
//     }
// })

// // new game button
// newButton.addEventListener("click",set);


