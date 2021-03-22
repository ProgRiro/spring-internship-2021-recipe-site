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

  const handleClick = (link?: string) => {
    if (!link) return;
    const url = new URL(link);
    const page = new URLSearchParams(url.search);
    const nextPage = page.get("page") || "1";
    const { pathname, query } = router;
    query.page = nextPage;
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
          <div>
            {recipes.map((recipe, index) => (
              <div key={index}>
                {recipe.id}
                {recipe.author.name}
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
    page: string;
  };
}

export const getServerSideProps = async (context: contextProps) => {
  const { fetchRecipes } = RecipeHandler();
  const response = await fetchRecipes(context.query.page);
  return {
    props: {
      recipes: JSON.parse(JSON.stringify(response.recipes)),
      links: response.links,
    },
  };
};

export default Top;
