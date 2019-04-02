function spinWords(str){
  //TODO Have fun :)
  let arr = str.trim().split(" ");

  const newArr = arr.map(function(elem){
  if (elem.length >= 5){
  	return elem.split("").reverse().join("");
  }
  else
  	return elem;
  });
  return newArr.join(" ");
}

// console.log(spinWords("Hey fellow warriors"));


//1. longest word

function longestWord(str){
  let arr = str.trim().split(" ");
  let maxLen = 0;
  let longWord = "";
  arr.forEach(elem =>{
    if (elem.length > maxLen){
      maxLen = elem.length;
      longWord = elem;
    }
  });
  let ret = [];
  arr.forEach(elem=>{
    if (elem.length == longWord.length){
      ret.push(elem);
    }
  });
  if (ret.length > 1)
  return ret;
  else
  return longWord;
}

// console.log(longestWord("hello, there, my name is brad"));

//3.  array chunking
function chunkArray(arr, len){
  let newArr = [];
  let a = 0;
  for (let i = 0; i < arr.length; i += len){
    newArr.push(arr.slice(i, i+len));
    
  }
  return newArr;
}
// console.log(chunkArray([1,2,3,4,5,6,7], 2));


//3.  flatten Array
function flattenArray(arrays){
  let arr = [];
  arrays.forEach(function(elem){
    elem.forEach(function(elem1){
      arr.push(elem1);
    });
  });
  return arr;
}


// console.log(flattenArray([[1, 2], [3, 4], [5, 6, 7]]));


//4.  anagram
function isAnagram(str1, str2){
  let arr1 = str1.trim().split("").sort();
  let arr2 = str2.trim().split("").sort();

  if (str1.length !== str2.length)
  return  false;

  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] != arr2[i])
    return false;
  }
  return true;

}  

// console.log(isAnagram("elbow", "belox"));



///////////////----------------------------------

//1. add all numbers
function addAll(...arg){
  return arg.reduce(function(sum, elem){
    return sum+elem;
  }, 0);

   
}
// console.log(addAll(1, 2, 3, 4));

//2. sum all primes
function isPrime(num){
  
  for (let i = 2; i < num; i++){
    if (num % i == 0)
    return false;
  }
  return true;
}
function sumAllPrimes(num){
  let sum = 0;
  for (let i = 2; i <= num; i++){
    if (isPrime(i)){
      sum += i;
    }
  }
  return sum;
}
// console.log(sumAllPrimes(10));

//3. seek and destroy
function seekAndDestroy(arr, ...args){
  let newArr = [];
  for (let i = 0; i < args.length; i++){
    
  }

}





























