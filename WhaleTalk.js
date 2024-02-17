// Challenge Whale Talk ---------->

const input = "Witnessing the new song of our dear dolphin";
const vowels = ["a", "e", "i", "o", "u"];

// store the vowels from the input string.

const resultArray = [];

// 1- loop to iterate through each letter of the input variable text:
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < 5; j++) {
    // 2- compare each letter with our vowels array
    if (input[i] === vowels[j]) {
      if (input[i] === "e" || input[i] === "u") {
        // 3 double and push the letter e and u :
        resultArray.push(input[i].repeat(2));
      } else {
        console.log(resultArray.push(input[i]));
      }
    }
  }
}
console.log(resultArray);
let resultString = resultArray.join("");
console.log(resultString.toUpperCase());

// // for more test :
// const input = 'Hi, Human' ;  output --> IUUA
// const input = 'a whale of a deal!' ;  output --> 'AAEEOAEEA'
