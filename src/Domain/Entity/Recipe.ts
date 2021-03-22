import { Author, Ingredient } from "@/Domain/ValueObject";

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
    readonly published_at: string,
    // レシピの手順
    readonly steps: string[],
    // レシピの材料
    readonly ingredients: Ingredient[],
    // 関連するレシピのIDが最大5つ入っている。Poster View などを実装するのに使う。
    // なお、関連レシピの算出アルゴリズムのできが悪いため関連性が低い可能性がある点に注意。
    readonly related_recipes: number[]
  ) {}
}
