// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
  
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
  console.log(letterPoints);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  let word = input.question(`Let's play some scrabble!\n\nEnter a word to score: ` );
  // return oldScrabbleScorer(word);
  return word;
};

// Define a function that takes a word as a parameter and returns a numerical score. Each letter within the word is worth 1 point:
let simpleScore = function(word) {
  word.toUpperCase();
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    score += 1;
  }
  return score;
};


//Define a function that takes a word as a parameter and returns a score. Each vowel within the word is worth 3 points, and each consonant is worth 1 point.:
let vowelBonusScore = function(word) {
  word.toUpperCase();
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    if ((word[i] === 'a') || (word[i] === 'e') || (word[i] === 'i') || (word[i] === 'o') || (word[i] === 'u')) {
      score += 3;
    } else {
      score += 1;
    }
  }
  return score;  
};

let scrabbleScore;


//scoringAlgorithms Array should be populated with three objects, one for each of the three scoring options. Each object should contain three keys: name, description, and scorerFunction:

let simpleScoreObject = {
  name: 'Simple Score',
  description: 'Each letter is worth 1 point.',
  scorerFunction: simpleScore
};

let vowelScoreObject = {
  name: 'Bonus Vowels',
  description: 'Vowels are 3 pts, consonants are 1 pt.',
  scorerFunction: vowelBonusScore
}; 

let scrabbleScoreObject = {
  name: 'Scrabble',
  description: 'The traditional scoring algorithm.',
  scorerFunction: oldScrabbleScorer
};

const scoringAlgorithms = [simpleScoreObject, vowelScoreObject, scrabbleScoreObject];

//should return the object the user has selected:
function scorerPrompt() {
  let scorerIndex = input.question(`Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\n\nEnter 0, 1, or 2: `);
  return scoringAlgorithms[scorerIndex];
}

function transform() {};

//create a newPointStructure object that has 26 keys, one for each letter. The value of each key will be the Scrabble point value:
let newPointStructure = {
  'A':[1],
  'B':[3],
  'C':[3],
  'D':[2],
  'E':[1],
  'F':[4],
  'G':[2],
  'H':[4],
  'I':[1],
  'J':[8],
  'K':[5],
  'L':[1],
  'M':[3],
  'N':[1],
  'O':[1],
  'P':[3],
  'Q':[10],
  'R':[1],
  'S':[1],
  'T':[1],
  'U':[1],
  'V':[4],
  'W':[4],
  'X':[8],
  'Y':[4],
  'Z':[10]
};

function runProgram() {
  let word = initialPrompt();
  let scorer = scorerPrompt(); 
  console.log(`Score for '${word}': ${scorer.scorerFunction(word)}`);
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

