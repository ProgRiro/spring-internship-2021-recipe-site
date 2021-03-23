import { createRestClient } from "./utils";
import { RecipeRepositoryInterface, Links } from "@/Domain/Repository";
import { RecipeFactory, RecipeObj } from "@/Domain/Factory";

type RecipesResponse = {
  recipes: RecipeObj[];
  links: Links;
};

type RecipeResponse = RecipeObj;

export class RecipeRepository implements RecipeRepositoryInterface {
  private readonly restClient;
  constructor() {
    this.restClient = createRestClient();
  }

  public async fetchRecipes(page?: string, id?: string) {
    const params = new URLSearchParams();
    if (id) params.append("id", id);
    else if (page) params.append("page", page);
    const response = await this.restClient.get<RecipesResponse>(
      `https://internship-recipe-api.ckpd.co/recipes?${params.toString()}`
    );
    const recipes = response.recipes.map((recipe) =>
      RecipeFactory.createFromRecipeObj(recipe)
    );
    return {
      recipes: recipes,
      links: response.links || [],
    };
  }

  public async fetchRecipe(id: string) {
    const response = await this.restClient.get<RecipeResponse>(
      `https://internship-recipe-api.ckpd.co/recipes/${id}`
    );
    const recipe = RecipeFactory.createFromRecipeObj(response);
    return recipe;
  }

  public async searchRecipes(keyword: string, page?: string) {
    const params = new URLSearchParams();
    params.append("keyword", keyword);
    if (page) params.append("page", page);
    const response = await this.restClient.get<RecipesResponse>(
      `https://internship-recipe-api.ckpd.co/search?${params.toString()}`
    );
    const recipes = response.recipes
      ? response.recipes.map((recipe) =>
          RecipeFactory.createFromRecipeObj(recipe)
        )
      : [];
    return {
      recipes: recipes,
      links: response.links || [],
    };
  }
}

export const createRecipeRepository = () => {
  return new RecipeRepository();
};
