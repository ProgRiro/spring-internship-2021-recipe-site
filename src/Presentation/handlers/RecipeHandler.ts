import { createRecipeRepository } from "@/Infrastructure";

export const RecipeHandler = () => {
  const reciptClient = createRecipeRepository();

  const fetchRecipes = async (page?: string, id?: string) =>
    await reciptClient.fetchRecipes(page, id);

  const fetchRecipe = async (id: string) => await reciptClient.fetchRecipe(id);

  const fetchRecipeWithRelated = async (id: string) =>
    await reciptClient.fetchRecipeWithRelated(id);

  const searchRecipes = async (keyword: string, page?: string) =>
    await reciptClient.searchRecipes(keyword, page);

  return { fetchRecipes, fetchRecipe, fetchRecipeWithRelated, searchRecipes };
};
