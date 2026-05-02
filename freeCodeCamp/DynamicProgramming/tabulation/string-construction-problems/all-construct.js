/*
    Write a function `allConstruct(target, words)` that takes in a target string and 
    an array of strings as arguments. 

    The function should return a 2D array containing all of the ways that the target
    can be constructed by concatenating elements of the words array..

    You may reuse elements of the words array as many times as needed.   
*/

function allConstruct(target, words) {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);
    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        for (let word of words) {
            if (target.slice(i, i + word.length) === word) {
                const newCombinations = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...newCombinations);
            }
        }
    }

    return table[target.length];
}

/*
    m = target.length, n = words.length
    O(n^m) time complexity, O(n^m) space complexity
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

console.log(allConstruct("e".repeat(15) + "f", [
    "e",
    "ee",
    "eee", 
    "eeee",
    "eeeee",
    "eeeeee"
])); // []
