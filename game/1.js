

//hide dice at begining of game
document.querySelector("img").style.display = "none";

let scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// dice = Math.floor(Math.random() * (6) + 1);

// document.querySelector("#current-" + activePlayer).textContent = dice;

//scores selector
let score1 = document.querySelector("#score1");
let score2 = document.querySelector("#score2");
let current1 = document.querySelector("#current-0");
let current2 = document.querySelector("#current-1");

init();
function init(){
	score1.textContent= "0";
	score2.textContent= "0";
	current1.textContent = "0";
	current2.textContent = "0";
}

//button selectors
let newGame = document.querySelector("#newGame");
let rollDice = document.querySelector("#roll");
let hold = document.querySelector("#hold");


//add eventListener to roll
rollDice.addEventListener("click", function(){
	//1. roll dice
	let dice = Math.floor(Math.random() * (6) + 1);
	//2. update current score
	document.querySelector("#current-" + activePlayer).textContent = dice;
	//3. display dice with correct value
	const diceDom = document.querySelector("img");
	diceDom.style.display = "block";
	diceDom.src = "dice-" +dice+ ".png";
});

hold.addEventListener("click", function(){

});

















