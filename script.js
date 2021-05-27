const recipeTitle = document.getElementById("recipe-title"),
  recipeText = document.getElementById("recipe-text"),
  recipeCategory = document.getElementById("recipe-category"),
  recipeArea = document.getElementById("recipe-area");

function handleClick() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(response => {
      recipeTitle.innerText = response.meals[0].strMeal;
      recipeText.innerText = response.meals[0].strInstructions;
      recipeCategory.innerText = response.meals[0].strCategory;
      recipeArea.innerText = response.meals[0].strArea;
    })
    .catch(error => {
      console.error(error);
    });
}