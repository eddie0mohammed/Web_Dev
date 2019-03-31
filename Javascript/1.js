
// reverse a string

function reverseString(str){
	// let ret = "";
	// for (let i = str.length - 1; i >= 0; i--){
	// 	ret += str[i];
	// }
	// return ret;

	// return str.split("").reverse().join("");

	//usign reduce:
	return str.split("").reverse().reduce(function(ret, elem){
		return  ret + elem;
	}, "");
}
// console.log(reverseString("hello"));

//2. validate a palindrome

function isPalindrome(str){
	const reversed = reverseString(str);
	for(let i = 0; i < str.length; i++){
		if (str[i] === reversed[i])
			continue;
		else
			return false;
	}
	return true;
}
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("racecar"));

//3.reverse integer
function reverseInt(int){
	let ret = 0;
	let sign = 1;
	if (int < 0){
		sign = -1;
		int = -int;
	}
	while (int >= 1){
		ret = (ret * 10) + Math.floor(int % 10);
		int /= 10;
	}
	return ret * sign;
}
// console.log(reverseInt(-123450));


//4.capitalize letters
function capitalize(str){
	return  str.split("").map(elem=> elem.toUpperCase()).join("");
}
// console.log(capitalize("hello"));

function capitalizeFirst(str){
	// str = "i love you"
	let strArr = str.trim().toLowerCase().split(" ");
	for (let i = 0; i < strArr.length; i++){
		strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
	}
	return strArr.join(" ");
}
// console.log(capitalizeFirst(" i love you "));


//5. max character
function maxCharacter(str){

	const charMap = {};

	str.split("").forEach(function(elem){
		if(charMap[elem])
			charMap[elem]++;
		else
			charMap[elem] = 1;
	});
	let maxOccurence = 0;
	let maxChar = "";



	for (let key in charMap){
		if (charMap[key] > maxOccurence){
			maxOccurence = charMap[key];
			maxChar = key;
		}
	}
	return maxChar;

}
// console.log(maxCharacter("javascript"));


// CHALLENGE 6: FIZZBUZZ
function	fizzBuzz(){
	for (let i = 1; i <= 100; i++){
		if (i % 3 == 0 & i % 5 == 0)
			console.log("fizzBuzz " + i);
		else if (i % 3 == 0)
			console.log("Fizz " + i);
		else if (i % 5 == 0)
			console.log("Buzz " + i);
		else
			console.log(i);
	}
}
fizzBuzz();










































