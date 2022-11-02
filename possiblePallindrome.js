// Given a string s and an integer k. You should construct k non-empty palindrome strings using all the characters in s.
// Return True if you can use all the characters in s to construct k palindrome strings or False otherwise.

// Test Case 1:
// Input: s = "annabelle", k = 2 //
// Output: true
// Explanation: You can construct two palindromes using all characters in s.
// Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"

// Test Case 2:
// Input: s = "leetcode", k = 3 //ee
// Output: false
// Explanation: It is impossible to construct 3 palindromes using all the characters of s.

// if string length is less than k, we cannot form k palindromes from the string, so return false
// created a map to keep count of each letter in the string
// check how many letters have odd count
// if letters with odd count are greater than k, that means more than k palindromes need to be formed to
// make palindromes from the string where all the letters are utilised, so return false
// palindrome can be of 2 form: `aaaaa` and `aabaa`, one letter can have odd and even occurences, but 
// there will be at least x palindromes if x letters are there with odd number of frequency
// since the previous conditions do not hold, we can make k palindromes from the string, so return true


function canConstructPallindrome(string, count){
    if(count > string.length){
        return false;
    }
    const map = new Map()
    for(let i=0; i<string.length; i++){
        map.set(string[i], map.has(string[i]) ? map.get(string[i])+1 : 1)
    }
    let oddCount = 0;
    map.forEach((value, key) => {
        if(value % 2 !== 0){
            oddCount++
        }
    })
    console.log(oddCount)
    if(oddCount > count){
        return false;
    }
    return true;
}

console.log(canConstructPallindrome('doodlee', 3));
// doeleod, eodldoe, odeledo, oedldeo