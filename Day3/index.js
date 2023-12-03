// #JavaScriptmas 2023 Day 3 Challenge
  /** Challenge:
   * Some children have got some pieces of candy. They 
   * want to eat as much candy as they can but each 
   * child must eat exactly the same amount. Determine 
   * how many pieces of candy can be eaten altogether. 
   * A piece of candy can not be split.
   * 
   * Example:
   * Children: 3, Candies: 10
   * Each of the 3 children can eat 3 candies. 
   * So the total number of candies that can be eaten 
   * is 3*3 = 9. So the function calcTotalCandies should 
   * log out 9.
   **/

function calcTotalCandies() {
// Get user input for the number of children
const children = parseInt(document.getElementById("childrenInput").value);
// Get user input for the total number of candies
const candies = parseInt(document.getElementById("candiesInput").value);
// Check if the input is valid
if (isNaN(children) || isNaN(candies) || children <= 0 || candies <= 0) {
  alert("Please enter valid positive numbers for children and candies.");
  return;
}
// Calculate the maximum number of candies each child can eat
const candiesPerChild = Math.floor(candies / children);
// Calculate the total number of candies that can be eaten altogether
const totalCandies = candiesPerChild * children;
// Display the results
console.log(candiesPerChild)
console.log(totalCandies)
document.getElementById("result").innerHTML = `Each child can eat ${candiesPerChild} candies. <br> Total candies eaten: ${totalCandies}`;
}