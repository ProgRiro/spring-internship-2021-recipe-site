import { LinkButton } from "@/Presentation/components/molecules";
import { Colors, FontSizes } from "@/Library/StyleTypes";

interface Props {
  relatedRecipes: number[];
}

export const RelatedRecipesButton: React.FC<Props> = ({ relatedRecipes }) => {
  const getParams = () => {
    const params = new URLSearchParams();
    const ids = relatedRecipes.slice(0, 9).join(",");
    params.append("id", ids);
    return `/?${params.toString()}`;
  };

  return (
    <>
      <LinkButton to={getParams()}>
        <button className="relatedRecipesButton">
          ✌️ あなたへのおすすめレシピ ✌️
        </button>
      </LinkButton>
      <style jsx>{`
        .relatedRecipesButton {
          width: 100%;
          margin: 0 auto;
          padding: 15px;
          text-align: center;
          font-weight: bold;
          font-size: ${FontSizes.md};
          color: ${Colors.white};
          background-color: ${Colors.red};
          border-radius: 30px;
          border: none;
          box-shadow: 0 3px 6px -2px rgb(0 10 60 / 20%);
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
