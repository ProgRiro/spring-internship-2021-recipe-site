import React from "react";
import { Ingredient } from "@/Domain/ValueObject";
import { Title } from "@/Presentation/components/atoms";
import { Colors } from "@/Library/StyleTypes";

interface Props {
  ingredients: Ingredient[];
}

export const Ingredients: React.FC<Props> = ({ ingredients }) => {
  return (
    <>
      <div className="ingredients">
        <Title color="black" fontSize="lg" isCenter>
          材料
        </Title>
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className="ingredient"
            style={{
              backgroundColor: index % 2 === 0 ? Colors.white : Colors.beige,
            }}
          >
            <span className="name">{ingredient.name}</span>
            <span className="quantity">{ingredient.quantity}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .ingredients {
          margin: 30px 0;
        }
        .ingredient {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 10px;
          border-radius: 10px;
        }
        .name {
          width: 70%;
        }
        .quantity {
          width: 30%;
          text-align: right;
        }
      `}</style>
    </>
  );
};
