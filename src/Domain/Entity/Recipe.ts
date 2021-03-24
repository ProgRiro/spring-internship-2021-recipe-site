import { Author, Ingredient } from "@/Domain/ValueObject";
import { threadId } from "node:worker_threads";

export class Recipe {
  constructor(
    // レシピID
    readonly id: number,
    // レシピ名
    readonly title: string,
    readonly description: string,
    // レシピ画像。画像がない場合は null。
    readonly imageUrl: string | null,
    // レシピ作者
    readonly author: Author,
    // レシピを公開した日時。ISO 8601
    readonly publishedAt: string,
    // レシピの手順
    readonly steps: string[],
    // レシピの材料
    readonly ingredients: Ingredient[],
    // 関連するレシピのIDが最大5つ入っている。Poster View などを実装するのに使う。
    // なお、関連レシピの算出アルゴリズムのできが悪いため関連性が低い可能性がある点に注意。
    readonly relatedRecipes: number[]
  ) {}

  get ingredientNames() {
    return this.ingredients.map((ingredient) => ingredient.name);
  }

  get formattedIngredientNames() {
    return this.ingredientNames.join(", ");
  }

  get ingredientQuantities() {
    return this.ingredients.map((ingredient) => ingredient.quantity);
  }

  get formattedIngredientQuantities() {
    return this.ingredientQuantities.join(", ");
  }

  get formattedRelatedRecipeIds() {
    return this.relatedRecipes.join(",");
  }
}
