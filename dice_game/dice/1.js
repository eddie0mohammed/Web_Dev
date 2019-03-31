
let scores, roundScores, activePlayer;

init();

// dice_value = Math.floor(Math.random() * 6) + 1;


//connect random dice number to score in current
// document.querySelector(`#current-${activePlayer}`).textContent = dice_value;



//hide dice at the begining of game;
//select dice
const diceImg = document.querySelector("img");
//hide dice : add class list 'hide'
diceImg.classList.add("hide");

//button dice pressed
//add listener to button roll
//select button roll
const roll = document.querySelector("#roll");
roll.addEventListener("click", function(){
	//roll a new number on dice
	var value_dice = Math.floor(Math.random() * 6) + 1;
	//display the number with dice image
	//remove hide class
	diceImg.classList.remove("hide");
	//display preper dice image
	diceImg.src = `dice-${value_dice}.png`;
	//update score if value_dice != 1
	if (value_dice > 1){
		//add value_dice to roundScore
		roundScores += value_dice;
		//display new current scores
		document.getElementById(`current-${activePlayer}`).textContent = roundScores;
	}else{
		roundScores = 0;
		document.getElementById(`current-${activePlayer}`).textContent = "0";
		change_player();

	}

});
	


//set all scores to 0;
let score0 = document.querySelector("#score-0").textContent = "0";
let score1 = document.querySelector("#score-1").textContent = "0";
let current0 = document.querySelector("#current-0").textContent = "0";
let current1 = document.querySelector("#current-1").textContent = "0";


//hold button
const hold = document.getElementById("hold");
//add eventL to hold
hold.addEventListener("click", function(){
	score[activePlayer] += roundScores;
	//update scores
	document.getElementById(`score-${activePlayer}`).textContent = score[activePlayer];
	//reset roundScore and current to 0;
	document.getElementById(`current-${activePlayer}`).textContent = "0";


	//check if scores > 20 (game end)
	if (score[activePlayer] >= 20){
		//display winner
		document.getElementById(`name-${activePlayer}`).textContent = "WINNER";
		//hide dice, roll, hold
		document.querySelectorAll(".gameover").forEach(elem => elem.classList.add("over"));

	}else{
		//change player
			change_player();
	}


});

function change_player(){
document.getElementById(`name-${activePlayer}`).classList.remove("active");
		document.getElementById(`player-${activePlayer}`).classList.remove("turn");
		activePlayer = (activePlayer == 0) ? 1 : 0;
		document.getElementById(`name-${activePlayer}`).classList.add("active");
		document.getElementById(`player-${activePlayer}`).classList.add("turn");

		roundScores = 0;

}

//newGame
const newGame = document.getElementById("newGame");
//add eventL to newGame btn
newGame.addEventListener("click", function(){
	reset();

});



function reset(){
	document.querySelector("#score-0").textContent = "0";
	document.querySelector("#score-1").textContent = "0";
	document.querySelector("#current-0").textContent = "0";
	document.querySelector("#current-1").textContent = "0";

	document.querySelectorAll(".gameover").forEach(elem => elem.classList.remove("over"));
	diceImg.classList.add("hide");
	
	document.getElementById("name-0").textContent = "PLAYER 1";
	document.getElementById("name-1").textContent = "PLAYER 2";

	init();



}

function init(){
	score = [0, 0];
	roundScores = 0;
	activePlayer = 0;

	document.getElementById("player-0").classList.add("turn");
	document.getElementById("player-1").classList.remove("turn");
	
}
















