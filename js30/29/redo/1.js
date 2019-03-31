
let countDown;

const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");


function timer(seconds){
	clearInterval(countDown);

	const now = Date.now();
	const then = now + seconds * 1000;


	displayTimeLeft(seconds);
	displayEndTime(then);
	countDown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		//check when to stop (at 0)
		if (secondsLeft < 0){
			clearInterval(countDown);
			return ;
		}
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds){
	const min = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;

	const display = `${min < 10 ? "0" : ""}${min}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
	
	timerDisplay.textContent = display;
	//update tab title
	document.title = display;
}

function displayEndTime(timestamp){
	const end = new Date(timestamp);
	const hours = end.getHours();
	const mins = end.getMinutes();
	endTime.textContent = `Be Back At ${hours < 10 ? "0":0}${hours}:${mins < 10? "0": ""}${mins}`;
}

buttons.forEach(button => {
	button.addEventListener("click", startTimer);
});

function startTimer(){
	const second = parseInt(this.dataset.time);
	timer(second);
}

document.customForm.addEventListener("submit", function(e){
	//prevent from reloading the page
	e.preventDefault();
	const mins = this.minutes.value;
	this.reset();
	timer(mins * 60);

});