import React, { useState } from "react";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import { Recipe } from "@/Domain/Entity";
import { Links } from "@/Domain/ValueObject";
import { RecipeHandler } from "@/Presentation/handlers";

interface Props {
  recipes: Recipe[];
  links: Links;
}

const Top: NextPage<Props> = ({ recipes, links }) => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const { pathname, query } = router;

  const handleClick = (link?: string) => {
    if (!link) return;
    const url = new URL(link);
    const page = new URLSearchParams(url.search);
    const nextPage = page.get("page") || "1";
    query.page = nextPage;
    router.push({
      pathname,
      query,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    query.keyword = input;
    router.push({
      pathname,
      query,
    });
  };

  return (
    <>
      <h1>Hello Next!</h1>
      {recipes ? (
        <>
          <input onChange={handleChange} />
          <button onClick={handleSearch}>Search</button>
          <div>
            {recipes.map((recipe, index) => (
              <div key={index}>
                {recipe.id}
                {recipe.author.name}
                {recipe.title}
                {recipe.publishedAt}
              </div>
            ))}
          </div>
          <button
            onClick={() => handleClick(links.prev)}
            disabled={!links.prev}
          >
            Prev
          </button>
          <button
            onClick={() => handleClick(links.next)}
            disabled={!links.next}
          >
            Next
          </button>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

interface contextProps extends NextPageContext {
  query: {
    page?: string;
    keyword?: string;
  };
}

export const getServerSideProps = async (context: contextProps) => {
  const { fetchRecipes, searchRecipes } = RecipeHandler();
  const response = context.query.keyword
    ? await searchRecipes(context.query.keyword, context.query.page)
    : await fetchRecipes(context.query.page);
  return {
    props: {
      recipes: JSON.parse(JSON.stringify(response.recipes)),
      links: response.links,
    },
  };
};

export default Top;
