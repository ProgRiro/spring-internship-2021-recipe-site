import { useState } from "react";
import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  Ref,
  MultipleFieldErrors,
  Message,
} from "react-hook-form";
import { Ingredient } from "@/Domain/ValueObject/Ingredient";
import { RecipeHandler } from "@/Presentation/handlers";
import { FileHandler } from "./FileHandler";
import Router from "next/router";

type FormValues = {
  title: string;
  description: string;
  image_url?: string;
  steps: string[];
  ingredients: Ingredient;
};

type FieldError = {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};

type ImageUrls = {
  presigned_url: string;
  object_url: string;
};

export const FormHandler = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    errors,
    reset,
  } = useForm();
  const [steps, setSteps] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [imageFile, setImageFile] = useState<File>();
  const [imageUrls, setImageUrls] = useState<ImageUrls>();
  const {
    createRecipe,
    getCreatedRecipeIdNum,
    setCreatedRecipeIds,
  } = RecipeHandler();
  const { uploadImage } = FileHandler();

  const createData = (data: FormValues) => {
    return {
      title: data.title,
      description: data.description,
      image_url: imageUrls ? imageUrls.object_url : undefined,
      steps: steps,
      ingredients: ingredients,
    };
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (ingredients.length === 0) {
      alert("材料が入力されていません");
      return;
    }
    if (steps.length === 0) {
      alert("料理手順が入力されていません");
      return;
    }
    if (getCreatedRecipeIdNum() > 10) {
      alert("投稿できるのは10件までです");
      return;
    }
    if (imageUrls && imageFile) {
      await uploadImage({
        uploadUrl: imageUrls.presigned_url,
        file: imageFile,
      });
    }
    const requestData = createData(data);
    const recipe = await createRecipe(requestData);
    if (recipe) {
      setCreatedRecipeIds(recipe.id);
      setIngredients([]);
      setSteps([]);
      reset();
      alert("レシピを投稿しました");
      Router.push("/");
    }
  };

  const onError: SubmitErrorHandler<FieldError> = (e) => console.log(e);

  const handleSingleInput = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    inputValue: string,
    setInputValue: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    e.preventDefault();
    const value = getValues(inputValue);
    if (!value) return;
    setInputValue((prev) => [...prev, value]);
    setValue(inputValue, "");
  };

  const handleDoubleInput = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    inputFirstValue: string,
    inputSecondValue: string,
    setInputValue: React.Dispatch<React.SetStateAction<Ingredient[]>>
  ) => {
    e.preventDefault();
    const firstValue = getValues(inputFirstValue);
    const secondValue = getValues(inputSecondValue);
    if (!firstValue || !secondValue) return;
    setInputValue((prev) => [
      ...prev,
      { name: firstValue, quantity: secondValue },
    ]);
    setValue(inputFirstValue, "");
    setValue(inputSecondValue, "");
  };

  const handleIngredientDelete = (name: string, quantity: string) => {
    const newIngredients = ingredients.filter(
      (ingredient) =>
        ingredient.name !== name && ingredient.quantity !== quantity
    );
    setIngredients(newIngredients);
  };

  const handleStepDelete = (delStep: string) => {
    const newSteps = steps.filter((step) => step !== delStep);
    setSteps(newSteps);
  };

  return {
    steps,
    ingredients,
    imageFile,
    errors,
    setSteps,
    setIngredients,
    setImageFile,
    setImageUrls,
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    onSubmit,
    onError,
    handleSingleInput,
    handleDoubleInput,
    handleIngredientDelete,
    handleStepDelete,
  };
};
