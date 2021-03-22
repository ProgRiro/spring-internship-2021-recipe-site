import { createMockRecipeRepository } from "@/Infrastructure";
import { Recipe } from "@/Domain/Entity";

export const RecipeHandler = () => {
  const reciptClient = createMockRecipeRepository();

  const fetchRecipes = async () => await reciptClient.fetchRecipes();

  return { fetchRecipes };
};
