import { recipesObj } from "@/__tests__/mocks";
import { RecipeRepositoryInterface } from "@/Domain/Repository";
import { RecipeFactory, RecipeObj } from "@/Domain/Factory";

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

  public async fetchRecipe() {
    const recipe = RecipeFactory.createFromRecipeObj(recipesObj[0]);
    return recipe;
  }

  public async fetchRecipeWithRelated() {
    const recipes = recipesObj.map((recipe: RecipeObj) =>
      RecipeFactory.createFromRecipeObj(recipe)
    );
    return {
      recipes: recipes,
      links: {},
    };
  }

  public async searchRecipes() {
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
