import { GetServerSideProps, NextPage } from "next";
import { Recipe } from "@/Domain/Entity";
import { RecipeHandler } from "@/Presentation/handlers";
import {
  Ingredients,
  Steps,
  RelatedRecipesButton,
} from "@/Presentation/components/organisms";
import { RecipePage as RecipeLayoutPage } from "@/Presentation/components/pages";

interface Props {
  recipe: Recipe;
}

const RecipePage: NextPage<Props> = ({ recipe }) => {
  return (
    <RecipeLayoutPage
      id={recipe.id}
      title={recipe.title}
      author={recipe.author.name}
      description={recipe.description}
      publishedAt={recipe.publishedAt}
      imageSrc={recipe.imageUrl}
    >
      <Ingredients ingredients={recipe.ingredients} />
      <Steps steps={recipe.steps} />
      <RelatedRecipesButton relatedRecipes={recipe.relatedRecipes} />
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
