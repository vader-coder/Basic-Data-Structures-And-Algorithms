/*
    Write a function `bestSum(target, numbers)` that takes in a target number and 
    an array of numbers as arguments. 

    The function should return an array containing the shortest combination 
    of elements that add up to exactly the target. If there is no combination 
    that adds up to the target, then return null. If there is a tie for the
    shortest combination, you may return any one of the shortest. 
    
    You may use an element of the array as many times as needed. You may assume
    that all input numbers are nonnegative.
*/

function bestSum(target, numbers) {
    const table = Array(target + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= target; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const combination = [ ...table[i], num];
                if (!table[i + num] || table[i + num].length > combination.length) {
                    table[i + num] = combination;
                }
            }
        }
    }

    return table[target];
}

/*
    m = target, n = numbers.length
    O(n*m^2) time complexity, O(m^2) space complexity
*/

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) // [3, 5]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]