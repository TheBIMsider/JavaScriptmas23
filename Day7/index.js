// JavaScriptmas Day 7
/** Challenge: 
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
  
  Stretch goals:
  - Provide a way to add / remove wishlist items
  - Make each array item an object with the itemis name, description, and a link to where it can be   purchased
  **/
  
  const input = document.getElementById("input")
  const btn = document.getElementById("btn")
  let wishlist = document.getElementById("wishlist")
  let wishes = ["Macbook Air M2", "Scrimba Pro",]
  
  loadEventListeners()
  function loadEventListeners() {
    btn.addEventListener("click", addedWish);
  }
  
  function showWishes() {
    let fullList = "";
    for (let i = 0; i < wishes.length; i++) {
      // Create a new list item with removal icon
      fullList+= `<li>${wishes[i]}  <span class="remove-icon" onclick="removeItem(this)"> ✖️</span></li>`; 
    }
  wishlist.innerHTML = fullList;
  }
  showWishes();
  
  function addedWish() {
    let addedWish = "";
    if(input.value === "") {
    } else {
      addedWish = input.value;
      wishlist.innerHTML+= `<li>${addedWish} <span class="remove-icon" onclick="removeItem(this)">✖️</span></li>`;
      input.value = "";
    }
  }
  
  function removeItem(icon) {
      // Step 1: Get the reference to the list item
      let listItem = icon.parentElement;
       // Step 2: Remove the item from the list
      listItem.remove();
  }