import React from "react";
import { RecipeHandler } from "@/Presentation/handlers";

const Top: React.FC = () => {
  const { recipes } = RecipeHandler();

  return (
    <>
      <h1>Hello Next!</h1>
      {recipes ? (
        <div>
          {recipes.map((recipe, index) => (
            <div key={index}>
              {recipe.id}
              {recipe.author.name}
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Top;
