// Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English
// lowercase characters as follows:
// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.
// It's guaranteed that a unique mapping will always exist.

// {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 10#: 'j', 11#: 'k', ...}

// Test Case-1
// Input: s = "10#11#12"
// Output: "jkab"
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

// Test Cae-2
// Input: s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
// Output: "abcdefghijklmnopqrstuvwxyz"


function integerMapping(string){
    let res = '';
    let i = 0;
    while(i<string.length){
        if(string[i+2] === '#'){
            let code = +(string[i] + string[i+1]) + 96;
            console.log(code, +(string[i] + string[i+1]))
            res += String.fromCharCode(code);
            i= i+3;
        }else{
            let code = string[i].charCodeAt(0) + 48;
            res+= String.fromCharCode(code);
            i++;
        }
    }
    return res;
}

console.log(integerMapping('12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#'))