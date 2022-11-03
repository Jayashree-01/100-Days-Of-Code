// Write a function that reverses a string. The input string is given as an array of characters char[]. 
// Do not allocate extra space for another array, you must do this by modifying the input array 
// in-place with O(1) extra memory.

// Test Case-1
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Test Case-2
// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

function reverseString(charArr){
    let i=0;
    let j=charArr.length - 1;


    // Method-1 
    while(i<j){           
        let char = charArr[i]; //a
        charArr[i] = charArr[j]; //["s", "a", "a", "s"]
        charArr[j] = char; //["s", "a", "a", "D"]
        i++; //1
        j--; //2
    }

    // Method-2
    // let upto = charArr.length%2 == 0 ? charArr.length/2 : (charArr.length-1)/2;
    // console.log(upto)
    // for(let i=0; i<=upto; i++){
    //     let char = charArr[i];
    //     charArr[i] = charArr[j];
    //     charArr[j] = char;
    //     j--;
    // }

    return charArr;
}

console.log(reverseString(["h","e","l","l","o"]))