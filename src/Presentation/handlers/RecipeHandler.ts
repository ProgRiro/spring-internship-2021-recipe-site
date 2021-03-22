import { createRecipeRepository } from "@/Infrastructure";

export const RecipeHandler = () => {
  const reciptClient = createRecipeRepository();

  const fetchRecipes = async (page?: string, id?: string) =>
    await reciptClient.fetchRecipes(page, id);

  return { fetchRecipes };
};
