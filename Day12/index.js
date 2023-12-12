// JavaScioptmas Day 12
/**
 * Challenge:
 * 1. Sort the array twice. Alphabetically and reverse alphabetically.  
 **/
const sorterDisplay = document.getElementById('sorter')

const xmasGifts = [' guitar 🎸 ', ' skates ⛸️ ', ' bear 🧸 ', ' magnet 🧲 ' , ' laptop 💻 ', ' x-box 🎮 ',' jewellery 💍 ', ' kite 🪁 ', ' car 🚗 ', ' socks 🧦 ', ' peace on earth 🌎 ']

const sortedAZ = xmasGifts.slice().sort();
console.log('Sorted A-Z:', sortedAZ);

const sortedZA = xmasGifts.slice().sort().reverse();
console.log('Sorted Z-A:', sortedZA);

const sortedByLengthAZ = xmasGifts.slice().sort((a, b) => a.length - b.length);
console.log('Sorted by length A-Z:', sortedByLengthAZ);

const sortedByLengthZA = xmasGifts.slice().sort((a, b) => b.length - a.length);
console.log('Sorted by length Z-A:', sortedByLengthZA);

function sortAZ(){
  sorterDisplay.innerHTML = (sortedAZ);
}

function sortZA(){
  sorterDisplay.innerHTML = (sortedZA);
}

function sortAZLength(){
  sorterDisplay.innerHTML = (sortedByLengthAZ);
}

function sortZALength(){
  sorterDisplay.innerHTML = (sortedByLengthZA);
}
