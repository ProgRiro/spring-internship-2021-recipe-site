import { NextPage } from "next";
import { Title } from "@/Presentation/components/atoms";
import { RecipeForm } from "@/Presentation/components/organisms";
import { DefaultPage } from "@/Presentation/components/pages";

const Create: NextPage = () => {
  return (
    <DefaultPage>
      <Title color="black" fontSize="xl" isCenter>
        ✨ 新規レシピ作成 ✨
      </Title>
      <RecipeForm />
    </DefaultPage>
  );
};

export default Create;
