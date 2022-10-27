// There are n different activities are given with their starting time and ending time.
// Select the maximum number of activities to be done by a single person if only one activity
// can be performed at a time.


// testCase-1 : 
// input: [[10,16], [2,8], [1,6], [7,12]]
// output: [[1,6], [7,12]]

// testCase-2 :
// input: [[10,16], [2,8], [1,16], [7,12]]
// sortedArr : [[2,8], [7,12], [10,16], [1,16]]
// output: [[2,8], [10,16]]

let arr = [[10,16], [2,8], [1,16], [7,12]];
arr.sort((a,b) => a[1]-b[1])

let performedActivities = [];
let endingTime = 0;
for(let i=0; i<arr.length; i++){
    let startingTime = arr[i][0]; 
    if(startingTime >= endingTime){
        performedActivities.push(arr[i])
        endingTime = arr[i][1]; 
    }
}
console.log(performedActivities)



