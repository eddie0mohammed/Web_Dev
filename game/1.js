

//hide dice at begining of game
document.querySelector("img").style.display = "none";

let scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// dice = Math.floor(Math.random() * (6) + 1);

// document.querySelector("#current-" + activePlayer).textContent = dice;

//scores selector
let score0 = document.querySelector("#score0");
let score1 = document.querySelector("#score1");
let current0 = document.querySelector("#current-0");
let current1 = document.querySelector("#current-1");

init();
function init(){
	score0.textContent= "0";
	score1.textContent= "0";
	current0.textContent = "0";
	current1.textContent = "0";
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
	//4. update roundScore if dice != 1
	if (dice > 1){
		//add score
		roundScore += dice;
		document.querySelector("#current-" +activePlayer).textContent = roundScore;
	} else {
		// reset roundScore, update currentScore, next player
		nextPlayer();
		// //hide dice if 1 is rolled
		// document.querySelector("img").style.display = "none";
	}
});

hold.addEventListener("click", function(){
	//add current score to global element
	scores[activePlayer] += roundScore;
	//update scores to display score
	document.querySelector("#score" + activePlayer).textContent = scores[activePlayer];
	//reset current;
	roundScore = 0;
	document.querySelector("#current-" +activePlayer).textContent = "0";
	// check if player won the game else change player
	if (scores[activePlayer] >= 20){
		document.querySelector("#p" + activePlayer).textContent = "WINNER";
		document.querySelector("img").style.display = "none";
		rollDice.style.display = "none";
		hold.style.display = "none";


	}
	else
		nextPlayer();
});

newGame.addEventListener("click", function(){
	init();
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	rollDice.style.display = "block";
	hold.style.display = "block";
	document.querySelector("#p0").textContent = "Player1";
	document.querySelector("#p1").textContent = "Player2";


});

function nextPlayer(){
	roundScore = 0;
		document.querySelector("#current-" +activePlayer).textContent = "0";
		activePlayer = (activePlayer == 0) ? 1 : 0;
		if (activePlayer == 0){
			document.querySelector("#player1").classList.add("offWhite");
			document.querySelector("#player1").classList.remove("onWhite");
			document.querySelector("#player2").classList.remove("offWhite");
			document.querySelector("#player2").classList.add("onWhite");
		}else{
			document.querySelector("#player1").classList.add("onWhite");
			document.querySelector("#player1").classList.remove("offWhite");
			document.querySelector("#player2").classList.add("offWhite");
			document.querySelector("#player2").classList.remove("onWhite");
		}
}
















