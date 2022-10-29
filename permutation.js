// check a string is permuation of another.
// input stringA = 'god', stringB = 'rod' Output: false
// input stringA = 'Jaya', stringB = 'ayJa', Output: true

function permutationOfOthers(stringA, stringB){
    if(stringA.length != stringB.length){
        return false;
    }
    let charHash = new Array(128).fill(0);
    for(let i=0; i<stringA.length; i++){
        let charCode = stringA.charCodeAt(i);
        charHash[charCode]+= 1
    }
    for(let j=0; j<stringB.length; j++){
        let charCode = stringB.charCodeAt(j);
        charHash[charCode]-- ;
        if(charHash[charCode] < 0){
            return false;
        }
    }
    return true;
}
console.log(permutationOfOthers('Jaya', 'ayJa'));
