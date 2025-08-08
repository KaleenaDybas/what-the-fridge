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

  // if (!data.length) {
  //   appendTextToRecipeContParagraph("No recipes found.");
  //   return;
  // }

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
  appendTextToRecipeContParagraph("")

  recipes.forEach(recipe => {
    console.log(recipe)

    const div = document.createElement("div");
    div.className = "recipe";

    const title = document.createElement("h3")
    title.innerText = recipe.title
    div.appendChild(title);

    const image = document.createElement("img")
    image.src = recipe.image
    image.alt = recipe.title
    image.width = 100;
    div.appendChild(image);

    const usedIngredients = document.createElement("p");
    usedIngredients.textContent = `Used ingredients: ${recipe.usedIngredientCount}`;
    div.appendChild(usedIngredients);

    const missingIngredients = document.createElement("p");
    missingIngredients.textContent = `Missing ingredients: ${recipe.missedIngredientCount}`;
    div.appendChild(missingIngredients);

    const link = document.createElement("a");
    link.href = `https://spoonacular.com/recipes/${recipe.title.toLowerCase().replace(/ /g, "-")}-${recipe.id}`;
    link.target = "_blank";
    link.textContent = "View Full Recipe";
    div.appendChild(link);

    recipesContainer.appendChild(div);
  })
}


// Stretch goal:
// ability to convert recipe from cups to grams and back
// number validation on input
