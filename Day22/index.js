let people = [];

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const peopleListEl = document.getElementById("people-list");

// Array of 5 GIF URLs
const funnyGifs = [
  "https://media.giphy.com/media/LTFbyWuELIlqlXGLeZ/giphy.gif",
  "https://media.giphy.com/media/3o6Mbd5PatyGzSIsLe/giphy.gif",
  "https://media.giphy.com/media/sZJ9eVTkKgjn2/giphy.gif",
  "https://media.giphy.com/media/3vpJgnKRSO44uVaN5f/giphy.gif",
  "https://media.giphy.com/media/7tn6Y2NgbLw8o/giphy.gif"
];

// Load names from local storage when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  loadNamesFromLocalStorage();
  renderList(people);
});

addButtonEl.addEventListener("click", function () {
  addPerson();
});

inputFieldEl.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
      addPerson();
  }
});

function addPerson() {
  let inputValue = inputFieldEl.value;

  if (inputValue) {
      people.push(inputValue);

      // Save names to local storage
      saveNamesToLocalStorage();

      clearInputFieldEl();

      renderList(people);
  }
}

function renderList(array) {
  clearPeopleListEl();

  for (let i = 0; i < array.length; i++) {
      let currentPerson = array[i];
      appendPersonToPeopleListEl(currentPerson);
  }
}

function clearPeopleListEl() {
  peopleListEl.innerHTML = "";
}

function appendPersonToPeopleListEl(person) {
  const li = document.createElement("li");
  li.textContent = person;

  const deleteImage = document.createElement("img");
  deleteImage.alt = "Funny Gif";
  deleteImage.style.display = "none"; // Initially hide the image

  li.appendChild(deleteImage);

  li.addEventListener("dblclick", function () {
      // Remove the double-clicked person from the array
      people = people.filter(name => name !== person);

      // Save names to local storage after removal
      saveNamesToLocalStorage();

      // Select a random funny GIF from the array
      const randomGifUrl = funnyGifs[Math.floor(Math.random() * funnyGifs.length)];

      // Set the GIF URL as the source of the image
      deleteImage.src = randomGifUrl;

      // Show the funny gif image
      deleteImage.style.display = "block";

      // Hide the text content after a delay
      setTimeout(() => {
          li.textContent = "";
      }, 2400);

      // Render the updated list after another delay
      setTimeout(() => {
          renderList(people);
      }, 2500);
  });

  peopleListEl.appendChild(li);
}

function clearInputFieldEl() {
  inputFieldEl.value = "";
}

function saveNamesToLocalStorage() {
  // Save the 'people' array to local storage
  localStorage.setItem("people", JSON.stringify(people));
}

function loadNamesFromLocalStorage() {
  // Load the 'people' array from local storage
  const storedPeople = localStorage.getItem("people");
  if (storedPeople) {
      people = JSON.parse(storedPeople);
  }
}