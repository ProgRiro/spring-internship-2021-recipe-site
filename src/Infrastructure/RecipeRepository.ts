import { createRestClient } from "./utils";
import { RecipeRepositoryInterface } from "@/Domain/Repository";
import { RecipeFactory, RecipeObj } from "@/Domain/Factory";

export class RecipeRepository implements RecipeRepositoryInterface {
  private readonly restClient;
  constructor() {
    this.restClient = createRestClient();
  }

  public async fetchRecipes() {
    const response = await this.restClient.get<RecipeObj[]>(
      "https://internship-recipe-api.ckpd.co/"
    );
    return response.map((recipe) => RecipeFactory.createFromRecipeObj(recipe));
  }
}

export const createRecipeRepository = () => {
  return new RecipeRepository();
};
