// Given a List of words, return the words that can be typed using letters of alphabet
// on only one row's of American keyboard

// Test Case-1
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

function keyBoardRow(strArr){
    const hash = {
        1: {q: 1, w: 1, e: 1, r: 1, t: 1, y: 1, u: 1, i: 1, o: 1, p: 1},
        2: {a: 2, s: 2, d:2, f:2, g: 2, h:2, j:2, k:2, l:2},
        3: {z:3, x:3, c:3, v:3, b:3, n:3, m:3},
    }
    let rowNumber = 0;
    let loopStop = false;
    let result = [];
    for(let i=0; i<strArr.length; i++){
        str = strArr[i].toLowerCase()   //hello
        loopStop = false;
        for(let j=0; j<str.length; j++){ //h
            for (const key in hash[1]) {
                if(key == str[j]){
                    if(rowNumber == 0 || rowNumber == 1){
                        rowNumber = 1;
                        continue;
                    } else{
                        rowNumber = 0;
                        loopStop = true;
                        continue;
                    }
                }
            }
            for (const key in hash[2]) {
                if(key == str[j]){
                    if(rowNumber == 0 || rowNumber == 2){
                        rowNumber = 2;
                        continue;
                    } else{
                        rowNumber = 0;
                        loopStop = true;
                        continue;
                    }
                }
            }
            for (const key in hash[3]) {
                if(key == str[j]){
                    if(rowNumber == 0 || rowNumber == 3){
                        rowNumber = 3;
                        continue;
                    } else{
                        rowNumber = 0;
                        loopStop = true;
                        continue;
                    }
                }
            }
        }
        if(loopStop == true){
            continue;
        }
        result.push(strArr[i]);
    }
    return result;

}

console.log(keyBoardRow(["Hello", "Alaska", "Dad", "Peace"]))