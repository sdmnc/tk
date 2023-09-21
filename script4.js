//1 While loop//

const person = { name: "Jane", age: "23", city: "LA" };

function printObj(person) {
  let i = 0;

  let keys = Object.keys(person);
  let values = Object.values(person);
  let count = keys.length; // or va

  while (i < count) {
    console.log(keys[i] + ": " + values[i]);
    i++;
  }
}
printObj(person);

//2 Object search//
const person2 = { name: "John", age: "24", city: "NY" };

function searchObj(obj, key) {
  for (let k in obj) {
    if (k === key) {
      return true;
    }
  }
  return false;
}

console.log(searchObj(person2, "age"));
console.log(searchObj(person2, "citya"));
console.log(searchObj(person, "city"));
console.log(searchObj(person, "color"));

// 3. Combine propreties//
let helloWorld = { prop1: "Hello", prop2: "World", prop3: "!" };

function combineObject(objct) {
  let objKeys = Object.keys(objct);
  let result = "";
  let i = 0;

  do {
    let currentKey = objKeys[i];
    let currentValue = helloWorld[currentKey];
    result += currentValue;
    i++;
  } while (i < objKeys.length);
  return result;
}

console.log(combineObject(helloWorld));

// 4 number of wowels//

function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU"; // To count both uppercase and lowercase vowels

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Example usage
const input = "“Hello world, my name is Albert”";
console.log(countVowels(input)); // Outputs: 3

// Reverse string//

const reversedWords = (initialString) => {
  const initialStringArray = initialString.split('');

  const resultSrtingArray = [];
  let i = initialStringArray.length - 1;
  do {
    resultSrtingArray.push(initialStringArray[i]);
    i--;
  } while (i >= 0);

  let resultString = resultSrtingArray.join('');

  return resultString;
};
let initialString = "Hello, World!";
console.log(reversedWords(initialString));

// Palindrome//