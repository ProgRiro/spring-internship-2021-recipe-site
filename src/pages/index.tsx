export const config = { amp: "hybrid" };

import dynamic from "next/dynamic";
const TopPage = dynamic(
  () => import("@/Presentation/components/pages/TopPage")
);

import React from "react";
import { useAmp } from "next/amp";
import { NextPage, NextPageContext } from "next";
import { Recipe } from "@/Domain/Entity";
import { Links } from "@/Domain/ValueObject";
import { RecipeHandler } from "@/Presentation/handlers";
import {
  SearchForm,
  RecipeCard,
  Pagenation,
} from "@/Presentation/components/organisms";

interface Props {
  recipes: Recipe[];
  links: Links;
}

const Top: NextPage<Props> = ({ recipes, links }) => {
  const isAmp = useAmp();

  if (!recipes) return <div>Loading...</div>;

  return (
    <TopPage>
      {!isAmp && <SearchForm />}
      {recipes.length > 0 ? (
        <>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
          {!isAmp && <Pagenation prevLink={links.prev} nextLink={links.next} />}
        </>
      ) : (
        <div>Not Fount Recipe</div>
      )}
    </TopPage>
  );
};

interface contextProps extends NextPageContext {
  query: {
    page?: string;
    keyword?: string;
    id?: string;
  };
}

export const getServerSideProps = async (context: contextProps) => {
  const { fetchRecipes, searchRecipes } = RecipeHandler();
  const response = context.query.keyword
    ? await searchRecipes(context.query.keyword, context.query.page)
    : await fetchRecipes(context.query.page, context.query.id);
  return {
    props: {
      recipes: JSON.parse(JSON.stringify(response.recipes)),
      links: response.links,
    },
  };
};

export default Top;
