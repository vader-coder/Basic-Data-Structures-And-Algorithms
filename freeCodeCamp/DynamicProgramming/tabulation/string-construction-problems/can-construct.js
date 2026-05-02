/*
    Write a function `canConstruct(target, words)` that takes in a target string and 
    an array of strings as arguments. 

    The function should return a boolean indicating whether or not it is possible 
    to construct the target by concatenating elements from the words array. 

    You may reuse elements of the words array as many times as needed.   
*/

function canConstruct(target, words) {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (let word of words) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }    
            }
        }
    }

    return table[target.length];
}

/*
    m = target.length, n = words.length
    O(n*m^2) time complexity, O(m) space complexity
*/

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
console.log(canConstruct("e".repeat(50) + "f", [
    "e",
    "ee",
    "eee", 
    "eeee",
    "eeeee",
    "eeeeee"
])); // false