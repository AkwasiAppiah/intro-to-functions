// Write a function that, given a full message and a list of words, returns a single string that represents a 'censored' version of the original message: all words from the list must be scrubbed out and replaced with five asterisks (*****).

// The censor must scrub out matches that are case insensitive.

// You may assume that each string in the list is a lowercase single word.
// You may assume that there is no punctuation apart from spaces in the full message.

// function:
// =========
// name: censorMessage

// parameter: message: string
// parameter: banList: list of strings

// return type: string

// pseudo code:
// ============
function censorMessage(message, banlist) {
// set rawWords to the list of strings created by separating the string message into sub-strings at every space (' ')
let rawWords = message.split(' ');

// set scrubbedWords to an empty list
scrubbedWords = [];

// for each string word in rawWords

for (let words of rawWords){
// 	set lowercaseWord to lowercase(word)

let lowercaseWord = words.toLowerCase();
//   if lowercaseWord is contained in the list banList

if (banlist.includes(lowercaseWord))
{
//     insert the string '*****' at the end of scrubbedWords
    scrubbedWords.push('*****')
}

//   else
else
{
//     insert word at the end of scrubbedWords
    scrubbedWords.push(words)
}
}
// set scrubbedMessage to the string created by joining together every string in scrubbedWords with a space (' ') as a join character

let scrubbedMessage = scrubbedWords.join(' ')

// return scrubbedMessage

return scrubbedMessage

}


// test cases:
// ===========
console.log(censorMessage("don't mess with cats", ["mess"]), "should be don't ***** with cats")
console.log(censorMessage("Are you sure that this is safe", ["are", "is"]), "should be ***** you sure that this ***** safe")
console.log(censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]), "should be I CANNOT ***** *****")
