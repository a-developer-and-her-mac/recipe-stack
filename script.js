const recipeTitle = document.getElementById('recipe-title');
const recipeText = document.getElementById('recipe-text');

function handleClick() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(response => {
      recipeTitle.innerText = response.meals[0].strMeal;
      recipeText.innerText = response.meals[0].strInstructions;
    })
    .catch(error => {
      console.error(error);
    });
}