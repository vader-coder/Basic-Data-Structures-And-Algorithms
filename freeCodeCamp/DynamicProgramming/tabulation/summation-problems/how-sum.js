/*
    Write a function `howSum(target, numbers)` that takes in a target number and 
    an array of numbers as arguments. 

    The function should return an array containing any combination of elements that
    add up to exactly the target. If there is no combination that adds up to the 
    target, then return null. 
    
    You may use an element of the array as many times as needed. You may assume
    that all input numbers are nonnegative.
*/

function howSum(target, numbers) {
    const table = Array(target + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= target; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                table[i + num] = [ ...table[i], num];
            }
        }
    }

    return table[target];
}

/*
    m = target, n = numbers.length
    O(n*m^2) time complexity, O(m^2) space complexity
*/

console.log(howSum(7, [2, 3])) // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])) // [4, 3]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])) // null