// JavaScriptmas Day 10
  // Challenge: Add code here to make the youtube player play the new YouTube song

const player = document.getElementById("player")

function playSong(id) {
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`
}