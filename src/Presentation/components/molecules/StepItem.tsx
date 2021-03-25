import { Colors } from "@/Library/StyleTypes";
import { IconButton } from "./IconButton";

interface Props {
  stepIndex: number;
  handleDelete?: (step: string) => void;
}

export const StepItem: React.FC<Props> = ({
  stepIndex,
  handleDelete,
  children,
}) => {
  return (
    <>
      <div className="ingredient">
        <div className="stepIndex">{stepIndex}</div>
        <div className="stepDescription">
          <p>{children as string}</p>
        </div>
        {handleDelete && (
          <IconButton
            className="starButton"
            icon="trash"
            color="white"
            bgColor="red"
            size="md"
            onClick={() => handleDelete(children as string)}
          />
        )}
      </div>
      <style jsx>{`
        .ingredient {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .stepIndex {
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 40px;
          min-height: 40px;
          color: ${Colors.white};
          background-color: ${Colors.green};
          border-radius: 10px;
          font-weight: bold;
        }
        .stepDescription {
          margin-left: 10px;
          width: ${handleDelete ? "60%" : "80%;"};
        }
        p {
          word-wrap: break-word;
          text-align: left;
        }
      `}</style>
    </>
  );
};
