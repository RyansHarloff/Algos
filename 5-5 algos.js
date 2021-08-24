// Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces!!

// Example 1: "racecar" --> true
// Example 2: "Dud" --> false
// Example 3: "oho!" --> false

//function isPallindrome(str) {
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("Dud"));
console.log(isPalindrome("oho!"));

// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". Given "not much" return "n". Include spaces as well!

// Example 1: "my favorite racecar erupted" --> "e racecar e"
// Example 2: "nada" --> "ada"
// Example 3: "nothing to see" --> "ee"

//function longestPallindrome(str) {



//console.log(longestPallindrome("my favorite racecar erupted"));
//console.log(longestPallindrome("nada"));
//console.log(longestPallindrome("nothing to see"))