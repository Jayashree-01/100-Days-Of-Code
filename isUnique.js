// Find a string is contains unique characters or not!

// Input: 'Jayashree';
// Output: false;

// Input: 'Anmol';
// Output: true;


//METHOD-1

function checkUniqueCharacter(string){
    let charHash= new Array(128).fill(false)
    for( let i=0; i<string.length; i++){
        let charCode = string.charCodeAt(i) 
        if(charHash[charCode]){
            return false;
        }else {
            charHash[charCode]=true;
        }
    }
    return true;
}
console.log(checkUniqueCharacter('ABC')) 



// METHOD-2 (Also shows that characters with more than one occurance )

// function checkUniqueCharacter(string){
//     let asciiHash = new Array(128).fill(0)
//     for(let i = 0; i<string.length; i++){
//         let charAsciiCode = string.charCodeAt(i)
//         asciiHash[charAsciiCode] += 1
//     }
//     let isUnique = true;
//     for(let j=0; j<asciiHash.length; j++){
//         if(asciiHash[j] > 1){
//             isUnique = false;
//             console.log(String.fromCharCode(j), asciiHash[j])
//         }
//     }
//     return isUnique;
// }
// console.log(checkUniqueCharacter('Jayashree'))