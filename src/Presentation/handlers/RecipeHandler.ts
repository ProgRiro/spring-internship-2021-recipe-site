import { createRecipeRepository } from "@/Infrastructure";
import { RecipeRequest } from "@/Domain/Repository";
import { LocalStorage } from "@/Library";
import { Recipe } from "@/Domain/Entity";

export const RecipeHandler = () => {
  const reciptClient = createRecipeRepository();

  const fetchRecipes = async (page?: string, id?: string) =>
    await reciptClient.fetchRecipes(page, id);

  const fetchRecipe = async (id: string) => await reciptClient.fetchRecipe(id);

  const fetchRecipeWithRelated = async (id: string) =>
    await reciptClient.fetchRecipeWithRelated(id);

  const searchRecipes = async (keyword: string, page?: string) =>
    await reciptClient.searchRecipes(keyword, page);

  const createRecipe = async (data: RecipeRequest) =>
    await reciptClient.createRecipe(data);

  const deleteRecipe = async (id: string) =>
    await reciptClient.deleteRecipe(id);

  // LocalStorage

  const getCreatedRecipeIds = () => {
    const recipe = LocalStorage.get("recipe");
    return recipe.createdIds || [];
  };

  const getCreatedRecipeIdNum = () => {
    const recipeIds = getCreatedRecipeIds();
    return recipeIds.length;
  };

  const isCreatedRecipe = (id: number) => {
    const recipeIds = getCreatedRecipeIds();
    return recipeIds.includes(id);
  };

  const setCreatedRecipeIds = (id: number) => {
    const preCreatedRecipeIds = getCreatedRecipeIds();
    const newCreatedRecipeIds = preCreatedRecipeIds.filter(
      (preCreatedRecipeId) => preCreatedRecipeId !== id
    );
    LocalStorage.set("recipe", { createdIds: [id, ...newCreatedRecipeIds] });
  };

  const deleteCreatedRecipeIds = (id: number) => {
    const preCreatedRecipeIds = getCreatedRecipeIds();
    const newCreatedRecipeIds = preCreatedRecipeIds.filter(
      (preCreatedRecipeId) => preCreatedRecipeId !== id
    );
    LocalStorage.set("recipe", { createdIds: newCreatedRecipeIds });
  };

  const getDraftRecipes = () => {
    const recipe = LocalStorage.get("recipe");
    return recipe.draftRecipe || [];
  };

  const setDraftRecipes = (recipe: Recipe) => {
    const existDraftRecipes = getDraftRecipes();
    const newDraftRecipes = existDraftRecipes.filter(
      (existDraftRecipes) => existDraftRecipes.id !== recipe.id
    );
    LocalStorage.set("recipe", { draftRecipe: [recipe, ...newDraftRecipes] });
  };

  return {
    fetchRecipes,
    fetchRecipe,
    fetchRecipeWithRelated,
    searchRecipes,
    createRecipe,
    deleteRecipe,
    // LocalStorage
    getCreatedRecipeIds,
    getCreatedRecipeIdNum,
    isCreatedRecipe,
    setCreatedRecipeIds,
    deleteCreatedRecipeIds,
    getDraftRecipes,
    setDraftRecipes,
  };
};
