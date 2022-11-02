// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. 
// Return the destination city, that is, the city without any path outgoing to another city.
// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

// Test Case-1
// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. 
// Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

// Test Case-2
// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are: 
// "D" -> "B" -> "C" -> "A". 
// "B" -> "C" -> "A". 
// "C" -> "A". 
// "A". 
// Clearly the destination city is "A".

// Test Case-3
// Input: paths = [["A","Z"]]
// Output: "Z"'

function finalDestination(paths){
    const start = {}
    const end = {}
    for(let i=0; i<paths.length; i++){
        start[paths[i][0]] = 1; //{B: 1, D: 1, C: 1}
        end[paths[i][1]] = 1; //{C: 1, B: 1, A: 1}
    }
    const array = Object.keys(end); //[C, B, A]
    for(let j=0; j<array.length; j++){
        if(!start[array[j]]){ //1
            return array[j];
        }
    }
}

console.log(finalDestination([["B","C"],["D","B"],["C","A"]]))



