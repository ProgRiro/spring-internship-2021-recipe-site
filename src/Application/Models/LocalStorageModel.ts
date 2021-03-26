import { Recipe } from "@/Domain/Entity";

interface StaredIds {
  ids: number[];
}

interface RecipeStorage {
  createdIds: number[];
  draftRecipe: Recipe[];
}
export interface LocalStorageModel {
  star: Partial<StaredIds>;
  recipe: Partial<RecipeStorage>;
}
