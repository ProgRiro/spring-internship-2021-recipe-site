import { Recipe } from "@/Domain/Entity";
import { Ingredient } from "@/Domain/ValueObject";

export type Links = {
  next?: string;
  prev?: string;
};

export type RecipesResponse = {
  // レシピ一覧
  recipes: Recipe[];
  // ページネーション可能な場合の次、前のページのリンク
  links: Links;
};

// TODO: page -> number

export type RecipeRequest = {
  title: string;
  description: string;
  image_url?: string;
  steps: string[];
  ingredients: Ingredient[];
};

export interface RecipeRepositoryInterface {
  fetchRecipes: (page?: string, id?: string) => Promise<RecipesResponse>;
  fetchRecipe: (id: string) => Promise<Recipe>;
  fetchRecipeWithRelated: (id: string) => Promise<RecipesResponse>;
  searchRecipes: (keyword: string, page?: string) => Promise<RecipesResponse>;
  createRecipe: (data: RecipeRequest) => Promise<Recipe>;
  deleteRecipe: (id: string) => Promise<number>;
}
