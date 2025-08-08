const SPOONACULAR_API_KEY = '';

const recipesContainer = document.getElementById("recipes-container");
const formSubmission = document.getElementById('ingredient-form')
formSubmission.addEventListener("submit", handleFetchingRecipes)

function appendTextToRecipeContParagraph(text) {
  const paraTag = document.getElementById("para-tag")
  paraTag.innerText = text
}

function validateInput(input) {
  const regex = /\d/; // Regular expression to check for numbers aka `d` for digits
  return !regex.test(input);
}


function handleFetchingRecipes(e) {
  e.preventDefault()

  const inputedIngredients = document.getElementById("ingredients");
  const userInput = inputedIngredients.value;
  userInput.trim()

  if (!validateInput(userInput)) {
    document.getElementById("error-message").style.display = "block";
    return;
  }

  document.getElementById("error-message").style.display = "none";

  if (!userInput.length) {
    return;
  }

  appendTextToRecipeContParagraph("Searching Recipes...")
  fetchRecipes(userInput)
}

async function fetchRecipes(ingredients) {
  // const response = await fetch(
  //   `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients
  //   }&number=1&apiKey=${SPOONACULAR_API_KEY}`
  // );
  // const data = await response.json();

  // if (!data.length) {
  //   appendTextToRecipeContParagraph("No recipes found.");
  //   return;
  // }

  displayRecipeCard(fakeAPIResponse)
  // displayRecipeCard(data)
}


function displayRecipeCard(recipes) {
  appendTextToRecipeContParagraph("")

  recipes.forEach(recipe => {
    const div = document.createElement("div");
    div.className = "recipe-card";

    const image = document.createElement("img")
    image.src = recipe.image
    image.alt = recipe.title
    image.className = "logo";
    div.appendChild(image);

    const title = document.createElement("h2")
    title.innerText = recipe.title
    div.appendChild(title);

    const usedTitle = document.createElement("div");
    usedTitle.className = "section-title";
    usedTitle.textContent = `Used Ingredients (${recipe.usedIngredientCount})`;
    div.appendChild(usedTitle);

    const usedList = document.createElement("ul");
    usedList.className = "ingredients-list";
    recipe.usedIngredients.forEach(ingredient => {
      const li = document.createElement("li");
      li.className = "ingredient-item used";

      const img = document.createElement("img");
      img.src = ingredient.image;
      img.alt = ingredient.name;

      const text = document.createElement("span");
      text.textContent = `${ingredient.amount} ${ingredient.unit} of ${ingredient.name}`;

      li.appendChild(img);
      li.appendChild(text);
      usedList.appendChild(li);
    });
    div.appendChild(usedList);

    const missedTitle = document.createElement("div");
    missedTitle.className = "section-title";
    missedTitle.textContent = `Missing Ingredients (${recipe.missedIngredientCount})`;
    div.appendChild(missedTitle);

    const missedList = document.createElement("ul");
    missedList.className = "ingredients-list";
    recipe.missedIngredients.forEach(ingredient => {
      const li = document.createElement("li");
      li.className = "ingredient-item missing";

      const img = document.createElement("img");
      img.src = ingredient.image;
      img.alt = ingredient.name;

      const text = document.createElement("span");
      text.textContent = `${ingredient.amount} ${ingredient.unit} of ${ingredient.name}`;

      li.appendChild(img);
      li.appendChild(text);
      missedList.appendChild(li);
    });
    div.appendChild(missedList);

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
// DONE - number validation on input
