

const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]');

checkboxes.forEach(elem => elem.addEventListener("click", handleCheck));

let lastChecked;
function handleCheck(e){

	let inBetween = false;
	//check if the shift key is pressed
	//check if we are checking the checkbox and not unchecking 
	if (e.shiftKey && this.checked){

		//loop over every checkbox
		checkboxes.forEach(checkbox => {
			// console.log(checkbox);
			if (checkbox === this || checkbox === lastChecked){
				inBetween = !inBetween;
				// console.log("start")
			}
			if (inBetween){
				checkbox.checked = true;
			}
		});

	}


	lastChecked = this;
}