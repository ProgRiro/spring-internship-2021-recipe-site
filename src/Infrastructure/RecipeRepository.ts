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
      links: response.links || {},
    };
  }

  public async fetchRecipe(id: string) {
    const response = await this.restClient.get<RecipeResponse>(
      `https://internship-recipe-api.ckpd.co/recipes/${id}`
    );
    const recipe = RecipeFactory.createFromRecipeObj(response);
    return recipe;
  }

  public async fetchRecipeWithRelated(id: string) {
    const response = await this.restClient.get<RecipeResponse>(
      `https://internship-recipe-api.ckpd.co/recipes/${id}`
    );
    const recipe = RecipeFactory.createFromRecipeObj(response);

    const params = new URLSearchParams();
    const relatedIds = recipe.formattedRelatedRecipeIds;
    params.append("id", relatedIds);
    const relatedResponse = await this.restClient.get<RecipesResponse>(
      `https://internship-recipe-api.ckpd.co/recipes?${params.toString()}`
    );
    const relatedRecipe = relatedResponse.recipes
      ? relatedResponse.recipes.map((recipe) =>
          RecipeFactory.createFromRecipeObj(recipe)
        )
      : [];

    return {
      recipes: [recipe, ...relatedRecipe],
      links: relatedResponse.links || {},
    };
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
