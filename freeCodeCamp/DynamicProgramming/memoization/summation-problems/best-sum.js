/*
    Write a function `howSum(target, numbers)` that takes in a target number and 
    an array of numbers as arguments. 

    The function should return an array containing the shortest combination 
    of elements that add up to exactly the target. If there is no combination 
    that adds up to the target, then return null. If there is a tie for the
    shortest combination, you may return any one of the shortest. 
    
    You may use an element of the array as many times as needed. You may assume
    that all input numbers are nonnegative.
*/

function bestSum(target, numbers, memo={}) {
    if (target in memo) return memo[target];
    if (target === 0) return [];
    if (target < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainer = target - num;
        const remainderCombination = bestSum(remainer, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [ ...remainderCombination, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    memo[target] = shortestCombination;
    return shortestCombination;
}

/*
    m = target, n = numbers.length
    O(n*m^2) time complexity, O(m^2) space complexity
*/

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) // [3, 5]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]