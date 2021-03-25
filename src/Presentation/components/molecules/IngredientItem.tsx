import { Colors } from "@/Library/StyleTypes";
import { IconButton } from "./IconButton";

interface Props {
  ingredientIndex: number;
  name: string;
  quantity: string;
  handleDelete?: (name: string, quantity: string) => void;
}

export const IngredientItem: React.FC<Props> = ({
  ingredientIndex,
  name,
  quantity,
  handleDelete,
}) => {
  return (
    <>
      <div
        className="ingredient"
        style={{
          backgroundColor:
            ingredientIndex % 2 === 0 ? Colors.white : Colors.beige,
        }}
      >
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        {handleDelete && (
          <IconButton
            className="starButton"
            icon="trash"
            color="white"
            bgColor="red"
            size="md"
            onClick={() => handleDelete(name, quantity)}
          />
        )}
      </div>
      <style jsx>{`
        .ingredient {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 10px;
          border-radius: 10px;
        }
        .name {
          width: ${handleDelete ? "50%" : "70%"};
          word-wrap: break-word;
        }
        .quantity {
          width: ${handleDelete ? "25%" : "30%"};
          text-align: ${handleDelete ? "left" : "right"};
          word-wrap: break-word;
        }
      `}</style>
    </>
  );
};
