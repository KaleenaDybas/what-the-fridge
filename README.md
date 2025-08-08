# What the Fridge

Tired of cooking the same three meals over and over? Got random cans of chickpeas, a sad onion, and no idea what to make for dinner? Trying to save money and use what you’ve already got in the pantry?

What the Fridge was made with you in mind.

This app lets you enter whatever ingredients you have on hand and instantly find recipes that use them. It’s a fun and practical way to stretch what’s in your fridge, discover new meals, and avoid yet another trip to the store.

## Project Purpose
This project was a challenging but super rewarding way to bring together everything I’ve been learning through the Code:You program. From form handling to working with APIs and updating the DOM, this was a full-on practice ground for my growing JavaScript skills.

## Features
- Input ingredients (comma-separated)
- Fetches real recipes from the Spoonacular API
- See which ingredients you already have vs. which are missing
- Ingredient images and links to full recipe pages
- Cups ⇄ Grams conversion tool on a second page
- Responsive design to work with mobile, tablets, and full sized screens

## Running Locally

Steps to run this project locally:
1) In your terminal, run `git clone https://github.com/KaleenaDybas/what-the-fridge.git`
2) Naviagate to the repo in your directory and then open it in your code editor
3) In the code editor, open the `index.js` file and update the `SPOONACULAR_API_KEY` variable at the top of the file with an API key to Spoonacular
4) Back in the terminal, run `open index.html` and enjoy finding recipes!

#### Spoonacular API Limitations
Spoonacular API has a daily rate limit of 50 hits from free accounts. They calculate their limit based on endpoint hits along with parameters included, so each ingredient inlcuded will count towards that 50 limit. Due to this, the endpoint used in my project has a hardcoded value to return only 3 recipes. Future work on this repo would be to build a backend that stores favorites for users to save on some of these API interactions.

To account for this rate limit during local development, I've been using an example API reponse from the spoonacular website that I called `fakeAPIResponse` in the return of the `fetchRecipes()` function. I left that code and exmaple API response in place, so please feel free to uncomment `// displayRecipeCard(fakeAPIResponse)` in `fetchRecipes()` if the API has reached its limit for the day.

#### Code:You Integrated Requirements
- Analyze data that is stored in arrays, objects, sets or maps and display information about it in your app.
  - `displayRecipeCard()`
- Use a regular expression to validate user input and either prevent the invalid input or inform the user about it (in all cases prevent invalid input from being stored or saved).
  - `validateInput()`, `handleFetchingRecipes()`, `validateConversionInput()`
- Create a function that accepts two or more input parameters and returns a value that is calculated or determined by the inputs.  Basic math functions don’t count (e.g. addition, etc).
  - `convertCupsAndGrams()`
- Convert user input between two formats and display the result. (e.g. Fahrenheit to Celcius, kilograms to pounds, etc)
  - `convertCupsAndGrams()`

#### Technologies Used
HTML \
CSS \
JavaScript \
Spoonacular API
