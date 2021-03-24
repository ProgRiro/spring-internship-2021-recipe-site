import { NextPage, NextPageContext } from "next";
import { Recipe } from "@/Domain/Entity";
import { Links } from "@/Domain/ValueObject";
import { RecipeHandler } from "@/Presentation/handlers";
import { PosterView, NotFound } from "@/Presentation/components/organisms";
import { StarFolderPage } from "@/Presentation/components/pages";

interface Props {
  recipes: Recipe[];
  links: Links;
}

const Star: NextPage<Props> = ({ recipes, links }) => {
  if (!recipes) return <div>Loading...</div>;

  return (
    <StarFolderPage>
      {recipes.length > 0 ? (
        <PosterView recipes={recipes} isCube={true} />
      ) : (
        <NotFound />
      )}
    </StarFolderPage>
  );
};

interface contextProps extends NextPageContext {
  query: {
    page?: string;
    id?: string;
    view?: string;
  };
}

export const getServerSideProps = async (context: contextProps) => {
  const { fetchRecipes } = RecipeHandler();
  if (!context.query.id) return { props: { recipes: {}, links: {} } };
  const response = await fetchRecipes(context.query.page, context.query.id);
  const view = context.query?.view === "poster" ? true : false;
  return {
    props: {
      recipes: JSON.parse(JSON.stringify(response.recipes)),
      links: response.links,
      isPosterView: view,
    },
  };
};

export default Star;
