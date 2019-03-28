
const inputs = document.querySelectorAll(".control input");

function handleUpdate(){

	const suffix = this.dataset.sizing || "";
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);


}

inputs.forEach(elem => elem.addEventListener("change", handleUpdate));
inputs.forEach(elem => elem.addEventListener("mousemove", handleUpdate));
