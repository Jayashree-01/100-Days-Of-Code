// Given a string, find the first non-repeating character in it
// and return it's index. If it doesn't exist, return -1.

// Test Case-1
// Input = "firstunique"
// Output: 0.
// Test Case-2
// Input = "codecoder",
// Output: 8.

function firstUniqueCharIndex(string){
    let map = {}
    for (let i=0; i< string.length; i++){ 
        map[string[i]] = map[string[i]] ? map[string[i]]+1  : 1;  //{f: 1, i: 2, r: 1, s: 1, t: 1, u: 2, n: 1, q: 1,e: 1}
    }
    for( let j=0; j<string.length; j++){
        if(map[string[j]] == 1){
            return j
        }
    }
    return -1;
}

console.log(firstUniqueCharIndex('firstunique'))