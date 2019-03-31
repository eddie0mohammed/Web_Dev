

const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

//resize canvas to fit window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//.strokeStyle
ctx.strokeStyle = "#BADA55";

//.lineJoin
ctx.lineJoin = "round";
//.lineCap
ctx.lineCap = "round";
ctx.lineWidth = 50;


let isDrawing = false;

//where we start the line from
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;


function draw(e){
	//stop the function from running if nothing clicked
	if (!isDrawing) return ;
	// console.log(e);
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	//.beginPath : start a path 
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();

	//update lastX, lastxY;
	lastX = e.offsetX;
	lastY = e.offsetY;
	hue++;
	if (hue >= 360)
		hue = 0;
	if (ctx.lineWidth >= 50 || ctx.lineWidth <= 30)
		direction = !direction;
	if (direction)
		ctx.lineWidth++;
	else
		ctx.lineWidth--;

}

canvas.addEventListener("mousedown", (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];

});


canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
