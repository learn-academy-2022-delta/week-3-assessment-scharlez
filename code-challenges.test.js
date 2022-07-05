// ASSESSMENT 3: Coding Practical Questions with Jest

const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// describe("arrayFibz", () => {
//     it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
//         const fibLength1 = 6
//         // // Expected output: [1, 1, 2, 3, 5, 8]
//         const fibLength2 = 10
//         // // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//         expect(arrayFibz(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//         expect(arrayFibz(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])

//     })
// })

//* RAN TEST (RESULTS BELOW): *//

// ReferenceError: arrayFibz is not defined 

// b) Create the function that makes the test pass.

//Pseudocode:
// Declare a function called arrayOfFibz. 
// Set the parameter as an array called arrayFibonnaci. 
// Use for loop to that takes in a number (greater than 2)
// Return array with Fib sequence


// const arrayFibz = (arrayFibonnaci) => {
//     for (i =0; i<arrayFibonnaci.length, i++) {
//         if (i > 2) {
//             arrayFibonnaci[i] = array [i - 1] + arrayFibonnaci [i -2]; 
//         } else {
//             arrayFibonnaci[i] = 1;
//         }
//         return arrayFibonnaci
//     }
    
//     // arrayFibonnaci.push(arrayFibonnaci[i-2] + arrayFibonnaci[i-1])
//     // return i 

// }

// ** NOTES TO INSTRUCTOR **: I was getting a SyntaxError on Line 46 and I'm not sure why, Jest suggested a semicolon but that did nothing and seemed odd but honestly I'm not even sure the code would have worked without the error...still processing the logic and basics to be frank. (this is why my code above is commented out.)

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("leastThenGreater", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        // Expected output: [-9, 7, 9, 199]
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        // Expected output: [-823, 7, 23]
        expect(leastThenGreater([4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"])).toEqual([-9, 7, 9, 199])
        expect(leastThenGreater(["hello", 7, 23, -823, false, 78, null, "67", 6, "number"])).toEqual([-823, 7, 23])

    })
})

//* RAN TEST (RESULTS BELOW): *//

// ReferenceError: leastThenGreater is not defined

// b) Create the function that makes the test pass.

//Pseudocode:
// Declare a function called leastThenGreater
// Set the parameter as an array called oddNums
// Use the .filter method to filter odd numbers
// Use the .sort method to sort data from least to greatest
// Use the .map to return expectd results.

// const leastThenGreater = (oddNums) => {
//     return oddNums.filter (number => number %2 !==0) + oddNums.sort((a,b) => a-b) + oddNums.map (number => number %2 !==0)
// }


//* RAN TEST (RESULTS BELOW): *//


// FAIL  ./code-challenges.test.js
// leastThenGreater
//   ✕ takes in an array and returns a new array of only odd numbers sorted from least to greatest (2 ms)

// ● leastThenGreater › takes in an array and returns a new array of only odd numbers sorted from least to greatest

//   expect(received).toEqual(expected) // deep equality

//   Expected: [-9, 7, 9, 199]
//   Received: "9,7,true,hey,7,199,-9,hola-9,0,false,true,4,7,7,8,9,hey,199,holatrue,false,false,true,false,true,true,false,true,true,true,true"

// ** NOTES TO INSTRUCTOR **: I'm not sure what the Jest test result was saying I did incorrectly, I found the response odd/confusing. Any clarity on this matter? 

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("onlySum", () => {
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
        const numbersToAdd1 = [2, 4, 45, 9]
        // Excpected output: [2, 6, 51, 60]
        const numbersToAdd2 = [0, 7, -8, 12]
        // Expected output: [0, 7, -1, 11]
        const numbersToAdd3 = []
        // Expected output: []
        expect(onlySum([2, 4, 45, 9])).toEqual([2, 6, 51, 60])
        expect(onlySum([0, 7, -8, 12])).toEqual([0, 7, -1, 11])
        expect(onlySum([])).toEqual([])
    })
})

//* RAN TEST (RESULTS BELOW): *//

// ReferenceError: onlySum is not defined

// b) Create the function that makes the test pass.

// Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

//Pseudocode:
// Declare a function called onlySum. 
// Set the parameter as an array.
// Use the .forEach method accumlate sum of array elements. 
// Use the .map to return expectd results.

const onlySum = (sumArray) => {
    let sum = 0;
    return sumArray.forEach(value => 
        sum+= value) + sumArray.map 
    
}

//* RAN TEST (RESULTS BELOW): *//

// FAIL  
// onlySum
//     ✕ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array. (1 ms)
// ● onlySum › takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// expect(received).toEqual(expected) // deep equality

// Expected: [2, 6, 51, 60]
// Received: "undefinedfunction map() { [native code] }"

// ** NOTES TO INSTRUCTOR **: Get a similiar issue to the one before, I'm guessing my logic is a bit off somehow? 