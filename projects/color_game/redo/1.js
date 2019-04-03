let pickedColor;

const boxes = document.querySelectorAll(".box");
const para = document.getElementById("para");


let colors = generateColors(6);

reset();
// array of colors

//display colors in box on screen.
for (let i = 0; i < boxes.length; i++){
	//add colors to each
	boxes[i].style.background = colors[i];
	//add click listeners to each
	boxes[i].addEventListener("click", clicked);;
}

pickedColor = pickColor();

document.getElementById("_255").textContent = pickedColor;

function clicked(){
	//grab color of clicked box
	const clickedColor = this.style.background;
	//compare clickedColor to pickedColor
	if (clickedColor == pickedColor){
		para.textContent = "Correct";
		changeColor(pickedColor);


	}else{
		this.style.background = "black";
		// this.classList.add("hide");
		para.classList.remove("para");
	}
}


function changeColor(color){
	for (let i = 0 ; i < boxes.length; i++){
		boxes[i].style.backgroundColor = pickedColor;
	}
	document.querySelector("header").style.background = pickedColor;
}


function pickColor(){
	//random 6
	return  colors[Math.floor((Math.random()) * 6)];
}

function generateColors(num){
	let arr = [];
	for (let i = 0; i < num; i++){
		arr.push(`rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`);
	}
	return (arr);
}

function randomNum(){
	return Math.floor(Math.random() * 256);
}


//new colors
const newColors = document.getElementById("new");
newColors.addEventListener("click", function(){
	reset();

});

function reset(){
	colors = generateColors(6);
	pickedColor = pickColor();
	document.getElementById("_255").textContent = pickedColor;

	for (let i = 0; i < boxes.length; i++){
	//add colors to each
	boxes[i].style.background = colors[i];
	}
	para.textContent = "";
}






















