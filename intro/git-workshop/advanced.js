const wordList = require("./word_list.js");

// DO NOT CHANGE ANY CODE ABOVE THIS LINE

console.log(wordList);

// Run this file by typing 'node advanced.js' in your terminal.

const firstThreeWords = wordList.filter((e, i) => i <= 2)
console.log(firstThreeWords)
// that contains the first three words in the list.

const lastThreeWords = wordList.filter((e, i) => i >= wordList.length - 3)
console.log(lastThreeWords)
// //that contains the last three words in the list.

const wordCount = wordList.length
console.log(wordCount)
// // that lets us know how many words are in the list.

const  twoLetterWords = wordList.filter((e) => e.length === 2)
console.log(twoLetterWords)
// // consisting of all the two-letter words in the list.
const  longestWord = wordList.sort((a, b) => a.length > b.length ? -1 : 1).at(0)
console.log(longestWord)
// // that contains the longest word in the list.

const containsC = wordList.filter((e) => e.includes("c"))
console.log(containsC)
// // that contains all the words containing the letter C.

const reversedWords = wordList.toReversed()
console.log(reversedWords)
// // that contains the list of words in reverse order. 

// //For this next task, a really useful tool to look into is regex. Please check out this fantastic resource here - RegExr.
let noWowelsRegExp = /\b([^aeiou\s]+)\b/gi
const noVowels = wordList.filter((e) => e.match(noWowelsRegExp))
console.log(noVowels)
// //that contains a list of all the words containing no vowels.

let repeatedLettersRegex = /([a-z]){1,}\1{1}/gi
const repeatedLetters = wordList.filter((e) => e.match(repeatedLettersRegex))
console.log(repeatedLetters)
// // that contains all of the words containing repeated letters.
