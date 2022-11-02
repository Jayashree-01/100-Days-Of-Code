// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2
// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

function addStrings(num1, num2){
    num1 = num1.split(''); // ['9', '8', '7', '9']
    num2 = num2.split(''); // ['8', '9', '7']
    let carry = '0';
    let result = []; 
    while(num1.length || num2.length ){
        let [c1 = '0', c2 = '0'] = [num1.pop(), num2.pop()]; // c1 = 9, c2 = und
        let added = (Number(carry)+ Number(c1) + Number(c2)).toString(); //'10'
        carry = '0';

        if(Number(added) >= 10){
            const [c1, c2] = added.split(''); //['1', '0'], c1 = 1, c2 = 0 (destructuring)
            carry = c1; //1
            added = c2; //0
        }
        result.unshift(added); // ['0','7','7','6']
    }


    if(Number(carry) > 0){
        result.unshift(carry); //['1','0','7','7','6']
    }
    return result.join(''); //'10776'
}

console.log(addStrings('9879', '897'));