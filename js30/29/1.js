let countDown;

const timeDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");



function	timer(second){
	//clear any existing timers
	clearInterval(countDown);

	const now = Date.now();
	const then = now + second * 1000;
	displayTimeLeft(second);
	displayEndTime(then);


	countDown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);

		//check if we should stop it
		if (secondsLeft < 0){
			clearInterval(countDown);
			return;
		} 
		//display it
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds){
	const mins = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const display = `${mins < 10 ? "0" : ""}${mins}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
	timeDisplay.textContent = display;


	//update title tab to display timer
	document.title = display;
	// console.log(`${mins < 10 ? "0" : ""}${mins} : ${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`);
}

function displayEndTime(timestamp){
	const end = new Date(timestamp);
	const hour = end.getHours();
	const minutes = end.getMinutes();

	endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? "0" : ""}${minutes}`;

}

function startTimer(){
	const seconds = parseInt(this.dataset.time);
	timer(seconds);
}

buttons.forEach(button => button.addEventListener("click", startTimer));

//form 

document.customForm.addEventListener("submit", function(e){
	e.preventDefault();
	const mins = this.minutes.value;
	this.reset();
	timer(mins * 60);
});