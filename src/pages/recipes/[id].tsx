import { GetServerSideProps, NextPage } from "next";
import {
  PosterViewPage,
  RecipePage as RecipeLayoutPage,
} from "@/Presentation/components/pages";
import { Recipe } from "@/Domain/Entity";
import { RecipeHandler } from "@/Presentation/handlers";
import {
  Ingredients,
  Steps,
  NotFound,
  PosterView,
  RelatedRecipesButton,
} from "@/Presentation/components/organisms";

interface Props {
  recipe: Recipe;
  recipes: Recipe[];
  isPosterView: boolean;
}

const RecipePage: NextPage<Props> = ({ recipe, recipes, isPosterView }) => {
  return (
    <>
      {isPosterView ? (
        recipes.length > 0 ? (
          <PosterViewPage>
            <PosterView recipes={recipes} />
          </PosterViewPage>
        ) : (
          <NotFound />
        )
      ) : recipe ? (
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
      ) : (
        <NotFound />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { fetchRecipe, fetchRecipeWithRelated } = RecipeHandler();
  const id = String(context.params?.id);
  const view = context.query?.view === "poster" ? true : false;
  if (!id) return { notFound: true };
  if (view) {
    const recipes = await fetchRecipeWithRelated(id);
    return {
      props: {
        recipe: JSON.parse(JSON.stringify({})),
        recipes: recipes ? JSON.parse(JSON.stringify(recipes.recipes)) : [],
        isPosterView: true,
      },
    };
  } else {
    const recipe = await fetchRecipe(id);
    return {
      props: {
        recipe: JSON.parse(JSON.stringify(recipe)),
        recipes: JSON.parse(JSON.stringify({})),
        isPosterView: false,
      },
    };
  }
};

export default RecipePage;
