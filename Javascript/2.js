
//1. longest Word
function longestWord(str){
    const arr = str.trim().split(" ");

    let maxLen = 0;
    let longestWord = "";
    arr.forEach(function(elem){
        if (elem.length > maxLen){
            maxLen = elem.length;
            longestWord = elem;
        }
    });
    let ret = [];

    arr.forEach(function(elem){
        if (elem.length == maxLen){
            ret.push(elem);
        }
    });
    
    if (ret.length > 1)
        return ret;
    else
    return longestWord;

}


// console.log(longestWord("Hello there, my name is Brad"));


//2. array chunking

function chunkArray(arr, len){
    
    let chunkedArr = [];

    for (let i = 0; i < arr.length; i += len){
        chunkedArr.push((arr.slice(i, i + len)));
    }
    return chunkedArr;
    
}
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));


//3. flatten array
function flattenArray(arrays){
    let ret = [];

    arrays.forEach(function(elem){
        elem.forEach(function(elem1){
            ret.push(elem1);
        });
    });
    return ret;
}

// console.log(flattenArray([[1,2], [3,4], [5,6]]));

//4. anagram
function isAnagram(str1, str2){
    if (str1.length !== str2.length)
    return false;
     const arr1 = str1.trim().split("").sort();
     const arr2 = str1.trim().split("").sort();

     for (let i = 0; i < str1.length; i++){
         if (arr1[i] != arr2[i])
         return false;
     }
     return true;
}

// console.log(isAnagram("elbow", "below#"));


//5. letter changes

function letterChanges(str){

    let arr = str.trim().toLowerCase().split("");
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= 'a' && arr[i] <= 'y'){
            arr[i] = arr[i].charCodeAt() + 1;
        }
        else
        continue;
    }
    return arr.join("");
    
}

console.log(letterChanges("hello there"));















































