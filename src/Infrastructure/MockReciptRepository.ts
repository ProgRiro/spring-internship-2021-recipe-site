import { recipesObj } from "@/__tests__/mocks";
import { RecipeRepositoryInterface, Links } from "@/Domain/Repository";
import { RecipeFactory, RecipeObj } from "@/Domain/Factory";

type RecipesResponse = {
  // レシピ一覧
  recipes: RecipeObj[];
  // ページネーション可能な場合の次、前のページのリンク
  links: Links;
};

export class MockRecipeRepository implements RecipeRepositoryInterface {
  public async fetchRecipes() {
    const recipes = recipesObj.map((recipe: RecipeObj) =>
      RecipeFactory.createFromRecipeObj(recipe)
    );
    return {
      recipes: recipes,
      links: {},
    };
  }
}

export const createMockRecipeRepository = () => {
  return new MockRecipeRepository();
};
