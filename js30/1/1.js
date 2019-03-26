

window.addEventListener("keydown", function(e){
	const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
	const key = document.querySelector(`.keys[data-key = "${e.keyCode}"]`);
	
	if (!audio) return 0;
	audio.currentTime = 0;
	audio.play();
	// console.log(key);

	key.classList.add("playing");
});

const keys = document.querySelectorAll(".keys");
keys.forEach(elem => elem.addEventListener("transitionend", function(e){
	if (e.propertyName !== 'transform') return ;
	elem.classList.remove("playing");

	
}));