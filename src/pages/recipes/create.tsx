import { NextPage } from "next";
import { Title } from "@/Presentation/components/atoms";
import { RecipeForm } from "@/Presentation/components/organisms";
import { DefaultPage } from "@/Presentation/components/pages";
import dynamic from "next/dynamic";
const BottomNav = dynamic(
  () => import("@/Presentation/components/organisms/BottomNav"),
  { ssr: false }
);

const Create: NextPage = () => {
  return (
    <DefaultPage>
      <Title color="black" fontSize="xl" isCenter>
        ✨ 新規レシピ作成 ✨
      </Title>
      <RecipeForm />
      <BottomNav />
    </DefaultPage>
  );
};

export default Create;
