import { GetServerSideProps, NextPage } from "next";
import { Recipe } from "@/Domain/Entity";
import { RecipeHandler } from "@/Presentation/handlers";

interface Props {
  recipe: Recipe;
}

const RecipePage: NextPage<Props> = ({ recipe }) => {
  return <div>{recipe.id}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { fetchRecipe } = RecipeHandler();
  const id = String(context.params?.id);
  if (!id) return { notFound: true };
  const recipe = await fetchRecipe(id);
  return {
    props: {
      recipe: JSON.parse(JSON.stringify(recipe)),
    },
  };
};

export default RecipePage;
