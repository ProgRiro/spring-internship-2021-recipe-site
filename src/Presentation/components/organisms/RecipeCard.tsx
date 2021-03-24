export const config = { amp: "hybrid" };

import React from "react";
import Link from "next/link";
import { useAmp } from "next/amp";
import { Recipe } from "@/Domain/Entity";
import { Title } from "@/Presentation/components/atoms";
import { Colors, FontSizes } from "@/Library/StyleTypes";

interface Props {
  recipe: Recipe;
}

export const RecipeCard: React.FC<Props> = ({ recipe }) => {
  const isAmp = useAmp();
  const formattedIngredientNames = recipe.ingredients
    .map((ingredient) => ingredient.name)
    .join(", ");
  const publishedAt = new Date(recipe.publishedAt);

  return (
    <>
      <Link href={`/recipes/${recipe.id}`}>
        <a rel="noopener">
          <div className="container">
            <Title color="black" fontSize="md" isCenter>
              {recipe.title}
            </Title>
            <small className="author">by {recipe.author.name}</small>
            <small className="publishedAt">
              {publishedAt.toLocaleDateString()}
            </small>
            <img
              className="img"
              src={recipe.imageUrl as string}
              loading="lazy"
            />
            <p className="description">{recipe.description}</p>
            <p className="ingredient">{formattedIngredientNames}</p>
            <div className="checkRecipeButton">✌️ レシピ詳細 ✌️</div>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          a {
            color: ${Colors.black};
            text-decoration: none;
          }
          .container {
            width: 90%;
            margin: 20px auto 0 auto;
            padding: 10px;
            box-shadow: 0 3px 6px -2px rgb(0 10 60 / 20%);
            background-color: ${Colors.white};
            border-radius: 20px;
          }
          .author {
            display: block;
            font-size: ${FontSizes.sm};
            text-align: center;
            margin-bottom: 2px;
          }
          .publishedAt {
            display: block;
            font-size: ${FontSizes.sm};
            text-align: center;
            margin-bottom: 10px;
          }
          .img {
            display: block;
            width: 90%;
            margin: 0 auto;
            border-radius: 20px;
            border: solid 1px ${Colors.black};
          }
          .description {
            font-size: ${FontSizes.sm};
            padding: 5px 8px;
            border-bottom: solid 2px ${Colors.gray};
          }
          .ingredient {
            font-size: ${FontSizes.sm};
            padding: 5px;
          }
          .checkRecipeButton {
            width: 65%;
            margin: 5px auto;
            padding: 5px 10px;
            text-align: center;
            color: ${Colors.white};
            background-color: ${Colors.green};
            border-radius: 20px;
          }
        `}
      </style>
    </>
  );
};
