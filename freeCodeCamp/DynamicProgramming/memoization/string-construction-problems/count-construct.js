/*
    Write a function `countConstruct(target, words)` that takes in a target string and 
    an array of strings as arguments. 

    The function should return the number of ways that the target string can be 
    constructed by concatenating elements of the words array.

    You may reuse elements of the words array as many times as needed.   
*/

function countConstruct(target, words, memo={}) {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of words) {
        if (target.indexOf(word) === 0) {
            const numWays = countConstruct(target.slice(word.length), words, memo);
            totalCount += numWays;
        }
    }

    memo[target] = totalCount;
    return totalCount;
}

/*
    m = target.length, n = words.length
    O(n*m^2) time complexity, O(m^2) space complexity
*/

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4
console.log(countConstruct("e".repeat(50) + "f", [
    "e",
    "ee",
    "eee", 
    "eeee",
    "eeeee",
    "eeeeee"
])); // 0