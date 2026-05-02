/*
    Write a function `fib(n)` that takes in a number as an argument. 
    The function should return the n-th number of the Fibonacci sequence. 

    The 0th number is 0, and the 1st number is 1.
    f(n) = f(n-1), + f(n-2)
*/

function fib(n) {
    const table = Array(n+1).fill(0);
    table[0] = 0;
    table[1] = 1;

    for (let i = 0; i <= n; i++) {
        table[i+1] += table[i];
        table[i+2] += table[i];
    }
    return table[n];
}

// O(n) time complexity, O(n) space complexity

console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(50)); // 12586269025