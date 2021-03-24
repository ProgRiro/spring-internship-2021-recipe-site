export const config = { amp: "hybrid" };

import { useAmp } from "next/amp";
import { NextPage, NextPageContext } from "next";
import { Recipe } from "@/Domain/Entity";
import { Links } from "@/Domain/ValueObject";
import { RecipeHandler } from "@/Presentation/handlers";
import {
  SearchForm,
  RecipeCard,
  NotFound,
} from "@/Presentation/components/organisms";
import { TopPage } from "@/Presentation/components/pages";

import dynamic from "next/dynamic";
const StarFolderButton = dynamic(
  () => import("@/Presentation/components/organisms/StarFolderButton"),
  { ssr: false }
);
const PrevObserver = dynamic(
  () => import("@/Presentation/components/organisms/PrevObserver"),
  { ssr: false }
);
const NextObserver = dynamic(
  () => import("@/Presentation/components/organisms/NextObserver"),
  { ssr: false }
);
interface Props {
  recipes: Recipe[];
  links: Links;
}

const Top: NextPage<Props> = ({ recipes, links }) => {
  const isAmp = useAmp();

  if (!recipes) return <div>Loading...</div>;

  return (
    <TopPage>
      {links.prev && <PrevObserver link={links.prev} />}
      {!isAmp && <SearchForm />}
      <StarFolderButton />
      {recipes.length > 0 ? (
        <>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
          {/* {!isAmp && <Pagenation prevLink={links.prev} nextLink={links.next} />} */}
        </>
      ) : (
        <NotFound />
      )}
      {links.next && <NextObserver link={links.next} />}
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
