import { recipes } from "@/__tests__/mocks";
import { RecipeRepositoryInterface } from "@/Domain/Repository";
import { RecipeFactory, RecipeObj } from "@/Domain/Factory";

export class MockRecipeRepository implements RecipeRepositoryInterface {
  public async fetchRecipes() {
    return recipes.map((recipe: RecipeObj) =>
      RecipeFactory.createFromRecipeObj(recipe)
    );
  }
}

export const createMockRecipeRepository = () => {
  return new MockRecipeRepository();
};
