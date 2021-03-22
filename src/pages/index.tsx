import { NextPage } from "next";
import { Recipe } from "@/Domain/Entity";
import { Links } from "@/Domain/ValueObject";
import { RecipeHandler } from "@/Presentation/handlers";

interface Props {
  recipes: Recipe[];
  links: Links;
}

const Top: NextPage<Props> = ({ recipes, links }) => {
  return (
    <>
      <h1>Hello Next!</h1>
      {recipes ? (
        <div>
          {recipes.map((recipe, index) => (
            <div key={index}>
              {recipe.id}
              {recipe.author.name}
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export const getStaticProps = async () => {
  const { fetchRecipes } = RecipeHandler();
  const response = await fetchRecipes();
  return {
    props: {
      recipes: JSON.parse(JSON.stringify(response.recipes)),
      links: response.links,
    },
  };
};

export default Top;
