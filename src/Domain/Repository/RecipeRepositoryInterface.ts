import { Recipe } from "@/Domain/Entity";

export interface RecipeRepositoryInterface {
  fetchRecipes: () => Promise<Recipe[]>;
}
