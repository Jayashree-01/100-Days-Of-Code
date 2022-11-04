// Given a string s and a string t, check if s is subsequence of t.
// You may assume that there is only lower case English letters in both s and t.
// t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

// Test Case-2
// Input:
// s = "abc", t = "ahbgdc"
// Output:
// True

function checkSubsequence(s, t){
    let sMap = {}
    for(let i=0; i<s.length; i++){
        sMap[s[i]] = sMap[s[i]] ? sMap[s[i]]+1 : 1; //{a: 1, b: 1,f: 1, c: 1}
    }
    let tMap = {}
    for(let j=0; j<t.length; j++){
        tMap[t[j]] = tMap[t[j]] ? tMap[t[j]]+1 : 1; //{a: 1, h: 1, b: 1, g: 1, d: 1, c: 1}
    }

    for(const [key, value] of Object.entries(sMap)){
        if(sMap[key] > tMap[key] || !tMap[key]){ 
            return false
        } 
    }
    return true;
}
console.log(checkSubsequence("abfc", "ahbgdc"));