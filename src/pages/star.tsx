export const config = { amp: "true" };

import { useAmp } from "next/amp";
import { NextPage, NextPageContext } from "next";
import { Recipe } from "@/Domain/Entity";
import { Links } from "@/Domain/ValueObject";
import { RecipeHandler } from "@/Presentation/handlers";
import {
  RecipeCard,
  Pagenation,
  NotFound,
} from "@/Presentation/components/organisms";
import { StarFolderPage } from "@/Presentation/components/pages";

interface Props {
  recipes: Recipe[];
  links: Links;
}

const Star: NextPage<Props> = ({ recipes, links }) => {
  const isAmp = useAmp();

  if (!recipes) return <div>Loading...</div>;

  return (
    <StarFolderPage>
      {recipes.length > 0 ? (
        <>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
          <Pagenation prevLink={links.prev} nextLink={links.next} />
        </>
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
  };
}

export const getServerSideProps = async (context: contextProps) => {
  const { fetchRecipes } = RecipeHandler();
  if (!context.query.id) return { props: { recipes: {}, links: {} } };
  const response = await fetchRecipes(context.query.page, context.query.id);
  return {
    props: {
      recipes: JSON.parse(JSON.stringify(response.recipes)),
      links: response.links,
    },
  };
};

export default Star;
