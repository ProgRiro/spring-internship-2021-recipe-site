import { RecipeHandler } from "@/Presentation/handlers";
import { IconButton } from "@/Presentation/components/molecules";
import Router from "next/router";

interface Props {
  id: number;
}

const DeleteButton: React.FC<Props> = ({ id }) => {
  const {
    isCreatedRecipe,
    deleteCreatedRecipeIds,
    deleteRecipe,
  } = RecipeHandler();

  const handleClick = () => {
    const result = window.confirm("このレシピを削除しますか？");
    if (result) {
      deleteCreatedRecipeIds(id);
      deleteRecipe(String(id));
      alert("削除しました");
      Router.push("/");
    }
  };

  return (
    <>
      {isCreatedRecipe(id) && (
        <IconButton
          className="starButton"
          icon="trash"
          color="white"
          bgColor="red"
          size="lg"
          onClick={handleClick}
        />
      )}
    </>
  );
};

export default DeleteButton;
