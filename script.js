const card = document.getElementById('card');

function handleClick() {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
      createRecipe(res.meals[0]);
    })
    .catch(e => {
      console.warn(e);
    });

  //Inspiration (and some code) from Florin Pop 
  const createRecipe = meal => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} : ${meal[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }

    const setInnerHTML = `
    <h2>${meal.strMeal}</h2>
    <p>------------------</p>
    <div class="recipe-instructions">
    ${meal.strCategory
        ? `<p>Category: ${meal.strCategory}</p>`
        : ''
    }
    ${meal.strArea ? `<p>Area: ${meal.strArea}</p>` : ''}
    </div>
    <p><strong>Ingredients:</strong></p>
    <ul>
      ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
    </div>
    <p>${meal.strInstructions}</p>`

    card.innerHTML = setInnerHTML;
  }
}