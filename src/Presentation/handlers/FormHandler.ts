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
  const { createRecipe, deleteRecipe } = RecipeHandler();

  const createData = (data: FormValues) => {
    return {
      title: data.title,
      description: data.description,
      image_url: null,
      steps: steps,
      ingredients: ingredients,
    };
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (steps.length === 0) return;
    if (ingredients.length === 0) return;
    const requestData = createData(data);
    const recipe = createRecipe(requestData);
    if (recipe) {
      setIngredients([]);
      setSteps([]);
      reset();
      alert();
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

  const handleDelete = () => {
    deleteRecipe("7000001");
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
    errors,
    setSteps,
    setIngredients,
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    onSubmit,
    onError,
    handleSingleInput,
    handleDoubleInput,
    handleDelete,
    handleIngredientDelete,
    handleStepDelete,
  };
};
