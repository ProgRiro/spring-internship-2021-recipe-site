import { createRestClient } from "./utils";
import { RecipeRepositoryInterface, Links } from "@/Domain/Repository";
import { RecipeFactory, RecipeObj } from "@/Domain/Factory";

type RecipesResponse = {
  // レシピ一覧
  recipes: RecipeObj[];
  // ページネーション可能な場合の次、前のページのリンク
  links: Links;
};

export class RecipeRepository implements RecipeRepositoryInterface {
  private readonly restClient;
  constructor() {
    this.restClient = createRestClient();
  }

  public async fetchRecipes() {
    const response = await this.restClient.get<RecipesResponse>(
      "https://internship-recipe-api.ckpd.co/recipes"
    );
    const recipes = response.recipes.map((recipe) =>
      RecipeFactory.createFromRecipeObj(recipe)
    );
    return {
      recipes: recipes,
      links: response.links,
    };
  }
}

export const createRecipeRepository = () => {
  return new RecipeRepository();
};
