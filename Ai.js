// 1. Select HTML elements
const ingredientsInput = document.querySelector("#ingredients");
const generateButton = document.querySelector("#generate-btn");
const recipeTitle = document.querySelector(".recipe-box h3");
const healthyButton = document.querySelector(".healthy");
const recipeInstructions = document.querySelector(".recipe-box ol");
const recipePlaceholder = document.querySelector(".recipe-placeholder");
const clearButton = document.querySelector("#clear-btn");
const copyButton = document.querySelector("#copy-btn");

// Check whether an ingredient exists as a separate word
function hasIngredient(text, ingredient) {
  const escapedIngredient = ingredient.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`\\b${escapedIngredient}\\b`, "i");
  return pattern.test(text);
}

// 2. Generate Recipe button
generateButton.addEventListener("click", function () {
  const ingredients = ingredientsInput.value.trim();

  if (ingredients === "") {
    alert("Please enter your ingredients first!");
    return;
  }

  const ingredientText = ingredients.toLowerCase();
  const has = (ingredient) => hasIngredient(ingredientText, ingredient);

  // Hide welcome message when displaying a recipe
  recipePlaceholder.style.display = "none";

  // Jollof Rice
  if (has("rice") && has("tomato") && has("pepper") && has("onion")) {
    recipeTitle.textContent = "Jollof Rice 🍚🍅";

    recipeInstructions.innerHTML = `
      <li>Wash the rice and set it aside.</li>
      <li>Wash and blend the tomatoes and pepper.</li>
      <li>Chop the onion and cook it in a little oil.</li>
      <li>Add the blended tomato mixture, seasoning, and water as needed.</li>
      <li>Add the rice, cover, and cook until tender.</li>
    `;

    // Tomato Egg Rice
  } else if (has("rice") && has("egg") && has("tomato")) {
    recipeTitle.textContent = "Tomato Egg Rice 🍅🍳";

    recipeInstructions.innerHTML = `
      <li>Rinse the rice and prepare the other ingredients.</li>
      <li>Wash and chop the tomato.</li>
      <li>Cook the rice until tender.</li>
      <li>Cook the tomato and egg thoroughly in a separate pan.</li>
      <li>Combine with the cooked rice and serve hot.</li>
    `;

    // Nigerian Fried Rice
  } else if (has("rice") && has("carrot") && has("peas")) {
    recipeTitle.textContent = "Nigerian Fried Rice 🍚🥕";

    recipeInstructions.innerHTML = `
      <li>Wash and cook the rice until almost tender.</li>
      <li>Wash and chop the carrots and other vegetables.</li>
      <li>Heat a little oil in a pan and cook the vegetables.</li>
      <li>Add the cooked rice, seasoning, and stock if available.</li>
      <li>Stir-fry until everything is hot and serve.</li>
    `;

    // Beans and Plantain
  } else if (has("beans") && has("plantain")) {
    recipeTitle.textContent = "Beans and Plantain 🍲🍌";

    recipeInstructions.innerHTML = `
      <li>Sort, rinse, and boil the beans until tender.</li>
      <li>Peel the plantain and cut it into slices.</li>
      <li>Cook the plantain thoroughly by boiling, steaming, or frying.</li>
      <li>Season the beans to taste.</li>
      <li>Serve the beans with the cooked plantain.</li>
    `;

    // Spaghetti with Tomato Sauce
  } else if (has("spaghetti") && has("tomato")) {
    recipeTitle.textContent = "Spaghetti in Tomato Sauce 🍝🍅";

    recipeInstructions.innerHTML = `
      <li>Boil the spaghetti according to the packet instructions.</li>
      <li>Wash and chop the tomatoes and onion if available.</li>
      <li>Cook the tomatoes with a little oil and seasoning.</li>
      <li>Add the cooked spaghetti and mix well.</li>
      <li>Heat thoroughly and serve.</li>
    `;

    // Yam and Egg
  } else if (has("yam") && has("egg")) {
    recipeTitle.textContent = "Yam and Egg 🍠🍳";

    recipeInstructions.innerHTML = `
      <li>Peel and cut the yam into pieces.</li>
      <li>Boil the yam in water until soft, then drain.</li>
      <li>Crack the eggs into a bowl and beat them.</li>
      <li>Cook the eggs thoroughly in a pan.</li>
      <li>Serve the cooked yam with the eggs.</li>
    `;

    // Tomato Beans Stew
  } else if (has("beans") && has("tomato")) {
    recipeTitle.textContent = "Tomato Beans Stew 🫘🍅";

    recipeInstructions.innerHTML = `
      <li>Sort and rinse the beans.</li>
      <li>Boil the beans until tender.</li>
      <li>Wash and chop the tomato.</li>
      <li>Cook the tomato with a little oil and seasoning.</li>
      <li>Stir in the cooked beans and simmer until heated through.</li>
    `;

    // Tomato and Onion Sauce
  } else if (has("tomato") && has("onion")) {
    recipeTitle.textContent = "Tomato and Onion Sauce 🍅🧅";

    recipeInstructions.innerHTML = `
      <li>Wash and chop the tomatoes and onion.</li>
      <li>Heat a little oil in a pan.</li>
      <li>Add the onion and cook until softened.</li>
      <li>Add the tomatoes and cook until soft.</li>
      <li>Season to taste and serve with rice or another meal.</li>
    `;

    // Simple Rice
  } else if (has("rice")) {
    recipeTitle.textContent = "Simple Rice Recipe 🍚";

    recipeInstructions.innerHTML = `
      <li>Measure and rinse the rice.</li>
      <li>Bring water to a boil in a pot.</li>
      <li>Add the rice and a little salt if desired.</li>
      <li>Cover and cook until the rice is tender.</li>
      <li>Fluff with a fork and serve.</li>
    `;

    // Simple Egg
  } else if (has("egg")) {
    recipeTitle.textContent = "Simple Egg Recipe 🍳";

    recipeInstructions.innerHTML = `
      <li>Crack the eggs into a clean bowl.</li>
      <li>Beat the eggs with a fork.</li>
      <li>Heat a little oil in a pan.</li>
      <li>Cook the eggs until they are fully set.</li>
      <li>Serve while warm.</li>
    `;

    // Simple Tomato
  } else if (has("tomato")) {
    recipeTitle.textContent = "Simple Tomato Recipe 🍅";

    recipeInstructions.innerHTML = `
      <li>Wash the tomatoes thoroughly.</li>
      <li>Chop the tomatoes into small pieces.</li>
      <li>Heat a little oil in a pan if needed.</li>
      <li>Cook the tomatoes until softened.</li>
      <li>Season to taste and serve.</li>
    `;

    // Simple Onion
  } else if (has("onion")) {
    recipeTitle.textContent = "Simple Onion Recipe 🧅";

    recipeInstructions.innerHTML = `
      <li>Peel the onion and remove the outer skin.</li>
      <li>Wash it and cut it into small pieces.</li>
      <li>Heat a little oil in a pan.</li>
      <li>Cook the onion until softened.</li>
      <li>Add seasoning as desired and serve as part of a meal.</li>
    `;

    // Simple Beans
  } else if (has("beans")) {
    recipeTitle.textContent = "Simple Beans Recipe 🫘";

    recipeInstructions.innerHTML = `
      <li>Sort the beans and remove any stones or damaged beans.</li>
      <li>Rinse the beans thoroughly.</li>
      <li>Boil the beans until tender, adding water as needed.</li>
      <li>Add seasoning and other ingredients as desired.</li>
      <li>Cook until ready and serve hot.</li>
    `;

    // No matching recipe
  } else {
    recipeTitle.textContent = "Recipe for: " + ingredients;

    recipeInstructions.innerHTML = `
      <li>Prepare your ingredients: ${ingredients}.</li>
      <li>Wash and chop the ingredients as needed.</li>
      <li>Choose a suitable cooking method.</li>
      <li>Cook thoroughly and season to taste.</li>
      <li>Serve and enjoy your meal!</li>
    `;
  }
});

// 3. Make It Healthier button
healthyButton.addEventListener("click", function () {
  const ingredients = ingredientsInput.value.trim();

  if (ingredients === "") {
    alert("Please enter your ingredients first!");
    return;
  }

  recipePlaceholder.style.display = "none";
  recipeTitle.textContent = "Healthy Recipe 🌿";

  recipeInstructions.innerHTML = `
    <li>Prepare your ingredients: ${ingredients}.</li>
    <li>Add more vegetables for extra nutrients.</li>
    <li>Use a small amount of oil.</li>
    <li>Reduce added salt and use herbs for flavour.</li>
    <li>Cook thoroughly and serve while fresh.</li>
  `;
});

// 4. Clear button
clearButton.addEventListener("click", function () {
  ingredientsInput.value = "";

  recipeTitle.textContent = "Ready to cook?";
  recipeInstructions.innerHTML = "";
  recipePlaceholder.style.display = "block";

  ingredientsInput.focus();
});

copyButton.addEventListener("click", async function () {
  const title = recipeTitle.textContent.trim();
  const instructions = recipeInstructions.innerText.trim();

  if (instructions === "") {
    alert("Generate a recipe first!");
    return;
  }

  const recipe = `${title}\n\n${instructions}`;

  try {
    await navigator.clipboard.writeText(recipe);
    alert("Recipe copied successfully! 📋");
  } catch (error) {
    alert("Could not copy the recipe. Please try again.");
    console.error("Copy error:", error);
  }
});
