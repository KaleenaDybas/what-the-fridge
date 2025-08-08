const SPOONACULAR_API_KEY = '';

const recipesContainer = document.getElementById("recipes-container");
const formSubmission = document.getElementById('ingredient-form')
formSubmission.addEventListener("submit", handleFetchingRecipes)

function appendTextToRecipeContParagraph(text) {
  const paraTag = document.getElementById("para-tag")
  paraTag.innerText = text
}

async function fetchRecipes(ingredients) {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients
    }&number=1&apiKey=${SPOONACULAR_API_KEY}`
  );
  const data = await response.json();

  if (!data.length) {
    appendTextToRecipeContParagraph("No recipes found.");
    return;
  }

  displayRecipeCard(fakeAPIResponse)
}

function handleFetchingRecipes(e) {
  e.preventDefault()
  const inputedIngredients = document.getElementById("ingredients");
  const userInput = inputedIngredients.value;
  userInput.trim()

  if (!userInput.length) {
    return;
  }

  appendTextToRecipeContParagraph("Searching Recipes...")
  fetchRecipes(userInput)
}


function displayRecipeCard(recipes) {
  
  recipes.forEach(recipe => {
    console.log(recipe)

    const name = document.createElement("h3")
    name.innerText = recipe.title

    const img = document.createElement("img")
    img.src = recipe.image
    img.alt = recipe.title


    recipesContainer.append(name);
    recipesContainer.append(img);
  })
}


// Stretch goal:
// ability to convert recipe from cups to grams and back
// number validation on input
