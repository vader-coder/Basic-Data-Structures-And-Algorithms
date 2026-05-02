/*
    Write a function `canSum(target, numbers)` that takes in a target number and 
    an array of numbers as arguments. 

    The function should return a boolean indicating whether or not it is possible 
    to generate the target using numbers from the array. 
    
    You may use an element of the array as many times as needed. You may assume
    that all input numbers are nonnegative.
*/

function canSum(target, numbers) {
    const table = Array(target + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num]= true;
            }
        }
    }

    return table[target];
}

/*
    m = target, n = numbers.length
    O(m*n) time complexity, O(m) space complexity
*/

console.log(canSum(7, [2, 3])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(300, [7, 14])) // false