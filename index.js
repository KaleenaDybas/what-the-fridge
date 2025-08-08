console.log("Hello from the otter sideeeeeee");
const SPOONACULAR_API_KEY = '';

async function asyncStuff(ingredients) {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients
    }&number=1&apiKey=${SPOONACULAR_API_KEY}`
  );
  console.log("RESPONSE")
  console.log(response)
}

function handleRecipe(e) {
  e.preventDefault()
  console.log("SUBMIT BUTTON CLICKED!! INSIDE HANDLE FUNCTION")
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
}


function fetchRecipes(ingredients) {
  // fetch spoonacular recipes
  console.log(ingredients)
  return fakeAPIResponse;
}

// All the console logs above are getting put in the dev console each time the page loads right now
// I need to make sure they are only called when I click the submit button or I'll run out 
// of my free spoonacular api stuff/token?

// hook into the form submit button
const submitButton = document.getElementById('ingredient-form')
// add event listener to submit
submitButton.addEventListener("submit", handleRecipe)
// when clicked, then do all the input stuff above



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
