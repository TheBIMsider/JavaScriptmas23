// #JavaScriptmas 2023 Day 14 Challenge

// Task:
// - Write a function to duplicate the elf when the button is clicked.
// - See index.css for optional styling challenges.

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.

// CSS Stretch goals:
// - Limit the number of elves to 6 per row.
// - Make sure that the elves stay in the elf hangout zone, no matter how many there are.

const elf = document.getElementById("elf")
const btn = document.getElementById("btn")
const title = document.getElementById("title")

btn.addEventListener("click", duplicateElf)

let elfCount = 1;

function duplicateElf() {
  if (elfCount <24) {
    elfCount ++
    elf.textContent += "🧝"
  } else {
    btn.textContent = "Enough Elves"
    title.textContent = "No More Lonely Elf"
    title.style.color = "white"
    title.style.fontWeight = "900"
    title.style.border = "solid"
    title.style.borderWidth = "5px"
    title.style.borderRadius = "25px"
    title.style.fontFamily = "Mountains of Christmas"
    title.style.fontSize = "75px"
    document.body.style.background = "url(elf-party.jpg)" 
  }
}