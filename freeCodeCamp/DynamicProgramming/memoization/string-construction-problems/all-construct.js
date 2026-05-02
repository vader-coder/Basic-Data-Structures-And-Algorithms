/*
    Write a function `allConstruct(target, words)` that takes in a target string and 
    an array of strings as arguments. 

    The function should return a 2D array containing all of the ways that the target
    can be constructed by concatenating elements of the words array..

    You may reuse elements of the words array as many times as needed.   
*/

function allConstruct(target, words, memo={}) {
    if (target === '') return [[]];
    if (target in memo) return memo[target];

    const result = [];

    for (let word of words) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, words, memo);
            const targetWays = suffixWays.map(way => [ word, ...way]);
            result.push(...targetWays);
        }
    }

    memo[target] = result;
    return result;
}

/*
    m = target.length, n = words.length
    O(n^m) time complexity, O(m) space complexity
*/

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); 
/*
[
    ['purp', 'le'],
    ['p', 'ur', 'p', 'le']
] 
*/
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
/*
[
    ['ab', 'cd', 'ef'],
    ['ab', 'c', 'def'],
    ['abc', 'def'],
    ['abcd', 'ef']
]
*/
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // []
console.log(allConstruct("e".repeat(50) + "f", [
    "e",
    "ee",
    "eee", 
    "eeee",
    "eeeee",
    "eeeeee"
])); // []
