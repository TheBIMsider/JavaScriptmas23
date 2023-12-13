/** JavaScriptmas Day 13
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */

const btn = document.getElementById("btn")
const altBtn = document.getElementById("altBtn")
const veg = document.getElementById("vegetarian-input")
const guests = document.getElementById("num-input")
let food = document.getElementById("food")
let dinnerPic = document.getElementById("dinner-pic")
const foodImages = {
  "Nut Roast": "Nut-roast.jpg",
  "Game Hen": "Game-Hens.jpg",
  "Candied Yams": "candied-yams.jpg",
  "Turkey": "Turkey.jpg",
  "Tofurky": "tofurky.jpg",
  "Turducken": "Turducken.jpg",
  "Roasted Butternut Squash Soup": "butternut-squash.jpg",
  "KFC": "KFC.jpg",
  "Vegetarian Pizza": "Veggie-Pizza.jpg",
  "Pizza": "Pizza.jpg",
  "Christmas Cabbage": "Christmas-Cabbage.jpg",
  "Chinese Food Buffet": "Buffet.jpg",
}

loadEventListeners()
function loadEventListeners() {
  btn.addEventListener("click", xmasDinner);
  altBtn.addEventListener("click", altDinner);
}

function displayFoodOption(option) {
  // Display the food option
  food.textContent = option;
  // Update the image source based on the food option
  dinnerPic.src = foodImages[option] || "";
}

function xmasDinner () {
  if (guests.value === "0") {
    alert("Come on there is at least you, enter 1 or more guests ;^)")
  } else if (veg.checked && guests.value <= 3) {
    food.textContent = "Nut Roast"
    displayFoodOption("Nut Roast")
  } else if (veg.checked === false && guests.value <= 3) {
    food.textContent = "Game Hen"
    displayFoodOption("Game Hen")
  } else if (veg.checked && guests.value == 4) {
    food.textContent = "Candied Yams"
    displayFoodOption("Candied Yams")
  } else if (veg.checked === false && guests.value == 4) {
    food.textContent = "Turkey"
    displayFoodOption("Turkey")
  } else if (veg.checked && guests.value == 5) {
    food.textContent = "Candied Yams"
    displayFoodOption("Candied Yams")
  } else if (veg.checked === false && guests.value == 5) {
    food.textContent = "Turkey"
    displayFoodOption("Turkey")
  } else if (veg.checked && guests.value >= 6) {
    food.textContent = "Tofurky"
    displayFoodOption("Tofurky")
  } else if (veg.checked === false && guests.value >= 6) {
    food.textContent = "Turducken"
    displayFoodOption("Turducken")
  } else {
    food.textContent = ""
    foodImage.src = ""
  }
}

function altDinner () {
  if (guests.value === "0") {
    alert("Come on there is at least you, enter 1 or more guests :)")
  } else if (veg.checked && guests.value <= 3) {
    food.textContent = "Roasted Butternut Squash Soup"
    displayFoodOption("Roasted Butternut Squash Soup")
  } else if (veg.checked === false && guests.value <= 3) {
    food.textContent = "KFC"
    displayFoodOption("KFC")
  } else if (veg.checked && guests.value == 4) {
    food.textContent = "Vegetarian Pizza"
    displayFoodOption("Vegetarian Pizza")
  } else if (veg.checked === false && guests.value == 4) {
    food.textContent = "Pizza"
    displayFoodOption("Pizza")
  } else if (veg.checked && guests.value == 5) {
    food.textContent = "Vegetarian Pizza"
    displayFoodOption("Vegetarian Pizza")
  } else if (veg.checked === false && guests.value == 5) {
    food.textContent = "Pizza"
    displayFoodOption("Pizza")
  } else if (veg.checked && guests.value >= 6) {
    food.textContent = "Christmas Cabbage"
    displayFoodOption("Christmas Cabbage")
  } else if (veg.checked === false && guests.value >= 6) {
    food.textContent = "Chinese Food Buffet"
    displayFoodOption("Chinese Food Buffet")
  } else {
    food.textContent = ""
    foodImage.src = ""
  }
}
