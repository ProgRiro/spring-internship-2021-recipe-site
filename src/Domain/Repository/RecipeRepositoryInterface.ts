import { Recipe } from "@/Domain/Entity";

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

export interface RecipeRepositoryInterface {
  fetchRecipes: (page?: string, id?: string) => Promise<RecipesResponse>;
  fetchRecipe: (id: string) => Promise<Recipe>;
  fetchRecipeWithRelated: (id: string) => Promise<RecipesResponse>;
  searchRecipes: (keyword: string, page?: string) => Promise<RecipesResponse>;
}
