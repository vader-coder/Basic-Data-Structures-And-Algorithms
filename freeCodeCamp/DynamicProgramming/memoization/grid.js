/* 
    You are a traveler on a 2D grid. You begin in the top-left corner and
    your goal is to travel to the bottom-right corner. You may only move 
    down or right.

    In how many ways can you travel to the goal on a grid with dimensions M*n?
*/

function grid(m, n, memo={}) {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === 1 && n == 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = grid(m-1, n, memo) + grid(m, n-1, memo);
    return memo[key];
}

// O(m*n) time complexity, O(n + m) space complexity

console.log(grid(1, 1)); // 1
console.log(grid(2, 3)); // 3
console.log(grid(3, 2)); // 3
console.log(grid(3,3)); // 6 
console.log(grid(18, 18)); // 2333606220