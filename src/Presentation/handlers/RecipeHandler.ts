import { createMockRecipeRepository } from "@/Infrastructure";
import { createRecipeRepository } from "@/Infrastructure";
import { Recipe } from "@/Domain/Entity";

export const RecipeHandler = () => {
  // const reciptClient = createMockRecipeRepository();
  const reciptClient = createRecipeRepository();

  const fetchRecipes = async () => await reciptClient.fetchRecipes();

  return { fetchRecipes };
};
