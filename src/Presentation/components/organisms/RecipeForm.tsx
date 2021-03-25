import { Button } from "@/Presentation/components/atoms";
import {
  ForwordInpuField,
  ForwordTextAreaField,
} from "@/Presentation/components/molecules";
import { Ingredients, Steps } from "@/Presentation/components/organisms";
import { FormHandler } from "@/Presentation/handlers";

export const RecipeForm = () => {
  const {
    steps,
    ingredients,
    setSteps,
    setIngredients,
    register,
    handleSubmit,
    onSubmit,
    onError,
    handleSingleInput,
    handleDoubleInput,
    handleDelete,
    handleIngredientDelete,
    handleStepDelete,
  } = FormHandler();

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="controls">
          <div className="basicDetails">
            <ForwordInpuField
              labelName="名前"
              inputName="title"
              placeholder="hoge"
              ref={register({ required: true })}
            />
            <ForwordTextAreaField
              labelName="概要"
              inputName="description"
              placeholder="hoge"
              ref={register({ required: true })}
            />
          </div>
          <div className="ingredients">
            <Ingredients
              ingredients={ingredients}
              handleDelete={handleIngredientDelete}
            />
            <div className="ingredientInputField">
              <ForwordInpuField
                labelName="材料名"
                inputName="ingredientName"
                placeholder="hoge"
                isDouble
                ref={register({ required: false })}
              />
              <ForwordInpuField
                labelName="材料分量"
                inputName="ingredientQuantity"
                placeholder="hoge"
                isDouble
                ref={register({ required: false })}
              />
            </div>
            <Button
              color="white"
              bgColor="black"
              fontSize="md"
              type="button"
              onClick={(e) =>
                handleDoubleInput(
                  e,
                  "ingredientName",
                  "ingredientQuantity",
                  setIngredients
                )
              }
            >
              材料を追加
            </Button>
          </div>
          <div className="steps">
            <Steps steps={steps} handleStepDelete={handleStepDelete} />
            <ForwordTextAreaField
              labelName="料理手順"
              inputName="step"
              placeholder="hoge"
              ref={register({ required: false })}
            />
            <Button
              color="white"
              bgColor="black"
              fontSize="md"
              type="button"
              onClick={(e) => handleSingleInput(e, "step", setSteps)}
            >
              手順を追加
            </Button>
          </div>
        </div>
        <Button color="white" bgColor="green" fontSize="md" type="submit">
          登録
        </Button>
        <Button
          color="white"
          bgColor="green"
          fontSize="md"
          type="button"
          onClick={handleDelete}
        >
          削除
        </Button>
      </form>
      <style jsx>
        {`
          .form {
            width: 100%;
          }
          .controls {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .basicDetails {
            width: 100%;
            margin-top: 10px;
          }
          .ingredients {
            width: 100%;
            margin: 20px 0;
          }
          .steps {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            width: 100%;
            margin: 20px 0 50px 0;
          }
          .ingredientInputField {
            display: flex;
            width: 100%;
          }
        `}
      </style>
    </>
  );
};
