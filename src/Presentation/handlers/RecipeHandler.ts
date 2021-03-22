import { useEffect, useState } from "react";
import { createMockRecipeRepository } from "@/Infrastructure";
import { Recipe } from "@/Domain/Entity";

export const RecipeHandler = () => {
  const reciptClient = createMockRecipeRepository();
  const [recipes, setRecipes] = useState<Recipe[]>();

  const fetchRecipes = async () =>
    await reciptClient
      .fetchRecipes()
      .then((res) => setRecipes(res))
      .catch((err) => console.error(err));

  useEffect(() => {
    (async () => await fetchRecipes())();
  }, []);

  return { recipes, fetchRecipes };
};
