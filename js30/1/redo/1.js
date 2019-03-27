

window.addEventListener("keydown", function(e){
	// console.log(e.keyCode);
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if (!audio)
		return ;
	// console.log(audio);
	audio.currentTime = 0;
	audio.play();

	const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
	key.classList.add("playing");

	const keys = document.querySelectorAll(".key").forEach(elem => elem.addEventListener("transitionend", removeTransition));
});

function removeTransition(e){
	if (e.propertyName !== "transform") return ;
	else
		this.classList.remove("playing");
}