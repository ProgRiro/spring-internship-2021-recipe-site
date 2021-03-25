import { Ingredient } from "@/Domain/ValueObject";
import { Title } from "@/Presentation/components/atoms";
import { IngredientItem } from "@/Presentation/components/molecules";

interface Props {
  ingredients: Ingredient[];
  handleDelete?: (name: string, quantity: string) => void;
}

export const Ingredients: React.FC<Props> = ({ ingredients, handleDelete }) => {
  return (
    <>
      <div className="ingredients">
        <Title color="black" fontSize="lg" isCenter>
          材料
        </Title>
        {ingredients.length > 0 ? (
          ingredients.map((ingredient, index) => (
            <IngredientItem
              key={index}
              ingredientIndex={index}
              name={ingredient.name}
              quantity={ingredient.quantity}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <p>材料が登録されていません</p>
        )}
      </div>
      <style jsx>{`
        .ingredients {
          margin: 40px 0 10px 0;
          width: 100%;
        }
        p {
          text-align: center;
        }
      `}</style>
    </>
  );
};
