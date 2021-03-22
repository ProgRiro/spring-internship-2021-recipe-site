import { NextPage } from "next";
import { Recipe } from "@/Domain/Entity";
import { RecipeHandler } from "@/Presentation/handlers";

interface Props {
  recipes: Recipe[];
}

const Top: NextPage<Props> = ({ recipes }) => {
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
  const recipes = await fetchRecipes();
  return {
    props: {
      recipes: JSON.parse(JSON.stringify(recipes)),
    },
  };
};

export default Top;
