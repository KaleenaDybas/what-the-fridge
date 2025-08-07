console.log("Hello from the otter sideeeeeee");

// Hook into the form input to get the users input value to use for our api call
const inputElement = document.getElementById("ingredients");
console.log(inputElement);
// Save the users input
const userInput = inputElement.innerText;
console.log(userInput)
// Validate that the input doesn't have numbers and no leading or trailing spaces
userInput.trim()
console.log(userInput)
// If there is no input, then we don't call the api
if (!userInput.length) {
  console.log("Inside this quick exit")
  // return;
}
// If there is an input, we use that in our api call to find recipes.
fetchRecipes(userInput)

function fetchRecipes(ingredients) {
  // fetch spoonacular recipes
  console.log(ingredients)
} 


// After we have our api recipe data, we will use that data to display the recipes found.
// We will loop through the recipes
// For each recipe, 
// we will display the name
// we will display a picture
// we will display the ingredients
// we will display the missing ingredients
// we will display the recipe.

// Stretch goal:
// ability to convert recipe from cups to grams and back
// number validation on input












// Event listening practice from MDN docs
// function changeColor(newColor) {
//   console.log("newColor", newColor)
//   const elem = document.getElementById("para");
//   elem.style.color = newColor;
// }

// document.querySelectorAll("button").forEach((button) => {
//   console.log(button)
//   button.addEventListener("click", (event) => {
//     console.log(event)
//     console.log(event.target.textContent)
//     changeColor(event.target.textContent.toLowerCase());
//   });
// });
