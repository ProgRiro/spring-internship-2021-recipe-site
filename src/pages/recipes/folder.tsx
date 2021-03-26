import { useEffect, useState } from "react";
import { NextPage } from "next";
import { Recipe } from "@/Domain/Entity";
import { RecipeHandler } from "@/Presentation/handlers";
import { Title } from "@/Presentation/components/atoms";
import { NotFound, RecipeCard } from "@/Presentation/components/organisms";
import dynamic from "next/dynamic";
const BottomNav = dynamic(
  () => import("@/Presentation/components/organisms/BottomNav"),
  { ssr: false }
);
import { DefaultPage } from "@/Presentation/components/pages";

const FolderPage: NextPage = () => {
  const { fetchRecipes, getCreatedRecipeIds } = RecipeHandler();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const createdIds = getCreatedRecipeIds();
    if (createdIds.length > 0) {
      const requestIds = createdIds.join(",");
      (async () => {
        const response = await fetchRecipes(undefined, requestIds);
        setRecipes(response.recipes);
      })();
    }
  }, []);

  return (
    <DefaultPage>
      <Title color="black" fontSize="xl" isCenter>
        🗂 マイフォルダ 🗂
      </Title>
      {recipes.length > 0 ? (
        <>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </>
      ) : (
        <NotFound />
      )}
      <BottomNav />
    </DefaultPage>
  );
};

export default FolderPage;
