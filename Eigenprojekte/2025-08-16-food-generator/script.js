let recipes = {
  1: {
    title: "Breakfast: 2 boiled eggs, slice of whole grain bread, 1x apple",
    toGo: true,
    meal: "breakfast",
    description: `
- Boil 2 eggs for 8–10 minutes and peel them.
- Toast a slice of whole grain bread.
- Wash and eat 1 apple.
`,
  },
  2: {
    title: "Snack: Low-fat Greek yogurt with a handful of berries",
    toGo: true,
    meal: "snack",
    description: `
- Scoop low-fat Greek yogurt into a bowl.
- Rinse a handful of berries and mix them in.
`,
  },
  3: {
    title:
      "Lunch: Grilled chicken breast, mixed salad, small portion brown rice",
    toGo: false,
    meal: "lunch",
    description: `
- Grill chicken breast until cooked through.
- Toss mixed salad with olive oil and lemon juice.
- Cook a small portion of brown rice and serve alongside.
`,
  },
  4: {
    title: "Snack: 1 banana with 1 tbsp peanut butter",
    toGo: true,
    meal: "snack",
    description: `
- Peel and eat 1 banana.
- Spread 1 tablespoon of peanut butter on it or eat alongside.
`,
  },
  5: {
    title:
      "Dinner: Turkey/chicken mince stir fry with mixed veggies (soy sauce, garlic), served over cauliflower rice or small portion noodles",
    toGo: false,
    meal: "dinner",
    description: `
- Cook turkey or chicken mince in a pan until browned.
- Add chopped vegetables, garlic, and a splash of soy sauce; stir-fry 5–7 minutes.
- Serve over cauliflower rice or cooked noodles.
`,
  },
  6: {
    title:
      "Breakfast: Overnight oats with skim milk, chia seeds, and banana slices",
    toGo: true,
    meal: "breakfast",
    description: `
- Mix oats with skim milk and 1 tsp chia seeds in a jar or bowl.
- Slice banana on top.
- Refrigerate overnight and eat in the morning.
`,
  },
  7: {
    title: "Snack: 1 boiled egg + carrot sticks",
    toGo: true,
    meal: "snack",
    description: `
- Boil 1 egg for 8–10 minutes and peel.
- Cut carrot into sticks and serve alongside.
`,
  },
  8: {
    title:
      "Lunch: Whole wheat wrap with grilled chicken, lettuce, tomato, cucumber, and light yogurt sauce",
    toGo: true,
    meal: "lunch",
    description: `
- Grill chicken and slice into strips.
- Place chicken, lettuce, tomato, and cucumber on a whole wheat wrap.
- Drizzle with light yogurt sauce and roll up.
`,
  },
  9: {
    title: "Snack: A handful of almonds",
    toGo: true,
    meal: "snack",
    description: `
- Measure a small handful of almonds and enjoy as a snack.
`,
  },
  10: {
    title:
      "Dinner: Lean beef chili with beans, served with a small side of quinoa",
    toGo: false,
    meal: "dinner",
    description: `
- Cook lean beef in a pan until browned.
- Add beans and chili seasoning; simmer 10–15 minutes.
- Cook quinoa separately and serve alongside.
`,
  },
  11: {
    title: "Breakfast: Scrambled eggs with spinach + 1 slice whole wheat bread",
    toGo: false,
    meal: "breakfast",
    description: `
- Whisk eggs and cook in a pan with spinach until fluffy.
- Toast a slice of whole wheat bread and serve with eggs.
`,
  },
  12: {
    title: "Snack: Cottage cheese with pineapple chunks",
    toGo: true,
    meal: "snack",
    description: `
- Scoop cottage cheese into a bowl.
- Chop pineapple into chunks and mix in.
`,
  },
  13: {
    title: "Lunch: Turkey burger (no bun, or use whole wheat bun) + side salad",
    toGo: false,
    meal: "lunch",
    description: `
- Cook a turkey burger patty in a pan until fully cooked.
- Serve with a side salad of your choice.
- Optionally, place burger in a whole wheat bun.
`,
  },
  14: {
    title: "Snack: Apple + handful of walnuts",
    toGo: true,
    meal: "snack",
    description: `
- Wash and slice an apple.
- Measure a handful of walnuts and serve alongside.
`,
  },
  15: {
    title:
      "Dinner: Baked chicken drumsticks, roasted sweet potato, steamed broccoli",
    toGo: false,
    meal: "dinner",
    description: `
- Season chicken drumsticks and bake at 200°C/400°F for 30–35 min.
- Cut sweet potato into cubes, roast until tender.
- Steam broccoli until bright green and slightly soft.
`,
  },
  16: {
    title:
      "Breakfast: Protein smoothie (milk, banana, oats, unsweetened cocoa, protein powder if available)",
    toGo: true,
    meal: "breakfast",
    description: `
- Blend milk, banana, oats, cocoa, and optional protein powder until smooth.
- Pour into a glass or travel cup and enjoy.
`,
  },
  17: {
    title: "Snack: Boiled egg + cucumber sticks",
    toGo: true,
    meal: "snack",
    description: `
- Boil 1 egg for 8–10 minutes and peel.
- Slice cucumber into sticks and serve alongside.
`,
  },
  18: {
    title: "Lunch: Lentil & vegetable soup + slice of whole grain bread",
    toGo: false,
    meal: "lunch",
    description: `
- Cook lentils in water or broth until tender.
- Add chopped vegetables and simmer until soft.
- Serve with a slice of whole grain bread.
`,
  },
  19: {
    title: "Snack: Low-fat Greek yogurt + 1 tsp honey",
    toGo: true,
    meal: "snack",
    description: `
- Scoop Greek yogurt into a bowl.
- Drizzle 1 tsp of honey on top and mix lightly.
`,
  },
  20: {
    title: "Dinner: Grilled chicken breast, roasted zucchini, brown rice",
    toGo: false,
    meal: "dinner",
    description: `
- Grill chicken breast until cooked.
- Slice zucchini, toss with olive oil, roast until tender.
- Cook brown rice and serve with chicken and zucchini.
`,
  },
  21: {
    title: "Breakfast: Omelette with bell peppers + onion + a little cheese",
    toGo: false,
    meal: "breakfast",
    description: `
- Chop bell peppers and onion.
- Whisk eggs and pour into a pan, cook with veggies.
- Sprinkle a little cheese on top and fold omelette.
`,
  },
  22: {
    title: "Snack: Handful of mixed nuts",
    toGo: true,
    meal: "snack",
    description: `
- Measure a handful of mixed nuts and eat as a snack.
`,
  },
  23: {
    title:
      "Lunch: Chicken & veggie stir fry with soy sauce, small portion rice noodles",
    toGo: false,
    meal: "lunch",
    description: `
- Cook chicken in a pan until browned.
- Add chopped vegetables and a splash of soy sauce, stir-fry 5–7 minutes.
- Cook rice noodles separately and serve together.
`,
  },
  24: {
    title: "Snack: 1 orange",
    toGo: true,
    meal: "snack",
    description: `
- Peel and eat 1 fresh orange.
`,
  },
  25: {
    title:
      "Dinner: Turkey meatballs with tomato sauce, whole wheat pasta, side salad",
    toGo: false,
    meal: "dinner",
    description: `
- Shape turkey into meatballs and bake or pan-cook until done.
- Heat tomato sauce and pour over meatballs.
- Serve with cooked whole wheat pasta and a side salad.
`,
  },
  26: {
    title: "Breakfast: 2 boiled eggs + oatmeal with a few berries",
    toGo: true,
    meal: "breakfast",
    description: `
- Boil 2 eggs for 8–10 minutes and peel.
- Cook oatmeal and top with a few berries.
`,
  },
  27: {
    title: "Snack: Carrot sticks + hummus",
    toGo: true,
    meal: "snack",
    description: `
- Cut carrots into sticks.
- Serve with 2–3 tablespoons of hummus.
`,
  },
  28: {
    title: "Lunch: Grilled chicken wrap with salad + light yogurt sauce",
    toGo: true,
    meal: "lunch",
    description: `
- Grill chicken and slice into strips.
- Place chicken, salad, and light yogurt sauce on a whole wheat wrap.
- Roll up and enjoy.
`,
  },
  29: {
    title: "Snack: Greek yogurt with chia seeds",
    toGo: true,
    meal: "snack",
    description: `
- Scoop Greek yogurt into a bowl.
- Sprinkle 1 tsp chia seeds on top and mix lightly.
`,
  },
  30: {
    title:
      "Dinner: Lean beef burger patty, roasted sweet potato fries, green beans",
    toGo: false,
    meal: "dinner",
    description: `
- Cook lean beef burger patty in a pan until done.
- Slice sweet potato into fries, toss with oil, roast until tender.
- Steam green beans and serve with burger and fries.
`,
  },
  31: {
    title:
      "Breakfast: Smoothie (spinach, banana, oats, protein powder, almond milk)",
    toGo: true,
    meal: "breakfast",
    description: `
- Blend spinach, banana, oats, protein powder, and almond milk until smooth.
- Pour into a cup and enjoy.
`,
  },
  32: {
    title: "Snack: Handful of almonds",
    toGo: true,
    meal: "snack",
    description: `
- Measure a handful of almonds and enjoy.
`,
  },
  33: {
    title: "Lunch: Chicken breast, quinoa, roasted veggies",
    toGo: false,
    meal: "lunch",
    description: `
- Grill chicken breast until cooked.
- Cook quinoa according to package instructions.
- Roast assorted vegetables and serve together.
`,
  },
  34: {
    title: "Snack: Cottage cheese with sliced peach",
    toGo: true,
    meal: "snack",
    description: `
- Scoop cottage cheese into a bowl.
- Slice a peach and mix on top.
`,
  },
  35: {
    title: "Dinner: Turkey chili with beans, side salad",
    toGo: false,
    meal: "dinner",
    description: `
- Cook turkey in a pan until browned.
- Add beans and chili seasoning, simmer 10–15 minutes.
- Serve with a fresh side salad.
`,
  },
  36: {
    title: "Dinner: Vegetable Curry with Grilled Chicken Strips and Rice",
    toGo: false,
    meal: "dinner",
    description: `
- Slice your choice of vegetables (e.g., bell peppers, carrots, peas) and set aside.
- Grill chicken strips until fully cooked and lightly browned.
- In a pan, sauté onions and garlic, then add the vegetables and curry spices.
- Pour in a little coconut milk or water, simmer until veggies are tender.
- Serve the curry and chicken strips over a portion of cooked rice.
`,
  },
};

function displayRecipe() {
  const mealType = document.getElementById("mealType").value;
  const allRecipes = Object.values(recipes);
  let filteredRecipes = allRecipes;

  if (mealType === "breakfast") {
    filteredRecipes = allRecipes.filter(
      (recipe) => recipe.meal === "breakfast"
    );
  } else if (mealType === "snack") {
    filteredRecipes = allRecipes.filter((recipe) => recipe.meal === "snack");
  } else if (mealType === "lunchDinner") {
    filteredRecipes = allRecipes.filter(
      (recipe) => recipe.meal === "lunch" || recipe.meal === "dinner"
    );
  }

  const recipe =
    filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];

  if (recipe) {
    document.getElementById("mealTitle").innerText = recipe.title;
    document.getElementById("recipe").innerText = recipe.description;
  } else {
    document.getElementById("mealTitle").innerText = "No recipe available";
    document.getElementById("recipe").innerText = "";
  }
}
