// Javascriptmas Day 6 - 2023
/* Task
  - Create a "Secret Santa" Generator
  - choose a person to be the Secret santa for someone elses out of an array of names
  - No person should be there own secret Santa
    Example output:
    {
        Alice: "Dan",
        Bob: "Ferdinand",
        Carly: "Ed",
        Dan: "Alice",
        Ed: "Ginny",
        Ferdinand: "Bob",
        Ginny: "Carly"
    }
    Stretch goals:
  - Create a Ul with a button to trigger your Secret Santa function and display the results. */

const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"];

// Function to shuffle the array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to create pairs
function createPairs(people) {
  // Make a copy of the array to avoid modifying the original
  const shuffledPeople = [...people];
  // Shuffle the array randomly
  shuffleArray(shuffledPeople);

  // Create pairs
  const pairs = [];
  for (let i = 0; i < shuffledPeople.length; i++) {
    const person1 = shuffledPeople[i];
    const person2 = shuffledPeople[(i + 1) % shuffledPeople.length];

    pairs.push({ [person1]: person2 });
  }

  return pairs;
}

// Get pairs
const allPairs = createPairs(people);

//  Randomly select one allPairs pair then display it
function displayPairedPerson() {
  const selectedPerson = document.getElementById("selectPerson").value;
  const selectedPair = allPairs.find(
    (pair) => Object.keys(pair)[0] === selectedPerson
  );

  if (selectedPair) {
    const pairedPerson = selectedPair[selectedPerson];
    document.getElementById("santa-display").innerText = pairedPerson;
  } else {
    document.getElementById("santa-display").innerText = "No pair found.";
  }
}
// console log all pairs
console.log(allPairs);
