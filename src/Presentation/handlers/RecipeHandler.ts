import { createRecipeRepository } from "@/Infrastructure";

export const RecipeHandler = () => {
  const reciptClient = createRecipeRepository();

  const fetchRecipes = async (page?: string, id?: string) =>
    await reciptClient.fetchRecipes(page, id);

  const fetchRecipe = async (id: string) => await reciptClient.fetchRecipe(id);
  return { fetchRecipes, fetchRecipe };
};
