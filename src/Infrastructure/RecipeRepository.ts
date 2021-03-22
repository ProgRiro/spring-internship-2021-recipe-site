import { createRestClient } from "./utils";
import { RecipeRepositoryInterface, Links } from "@/Domain/Repository";
import { RecipeFactory, RecipeObj } from "@/Domain/Factory";

type RecipesResponse = {
  recipes: RecipeObj[];
  links: Links;
};

export class RecipeRepository implements RecipeRepositoryInterface {
  private readonly restClient;
  constructor() {
    this.restClient = createRestClient();
  }

  public async fetchRecipes(page?: string, id?: string) {
    const params = new URLSearchParams();
    if (page) params.append("page", page);
    else if (id) params.append("id", id);
    const response = await this.restClient.get<RecipesResponse>(
      `https://internship-recipe-api.ckpd.co/recipes?${params.toString()}`
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
