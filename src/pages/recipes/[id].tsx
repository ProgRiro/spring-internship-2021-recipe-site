import { GetServerSideProps, NextPage } from "next";
import { Recipe } from "@/Domain/Entity";
import { RecipeHandler } from "@/Presentation/handlers";
import { Ingredients, Steps } from "@/Presentation/components/organisms";
import { RecipePage as RecipeLayoutPage } from "@/Presentation/components/pages";

interface Props {
  recipe: Recipe;
}

const RecipePage: NextPage<Props> = ({ recipe }) => {
  return (
    <RecipeLayoutPage
      title={recipe.title}
      author={recipe.author.name}
      publishedAt={recipe.publishedAt}
      imageSrc={recipe.imageUrl}
    >
      <p>{recipe.description}</p>
      <Ingredients ingredients={recipe.ingredients} />
      <Steps steps={recipe.steps} />
    </RecipeLayoutPage>
  );
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
