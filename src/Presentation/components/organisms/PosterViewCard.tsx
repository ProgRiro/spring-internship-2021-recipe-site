import { Recipe } from "@/Domain/Entity";
import {
  RecipeMain,
  Ingredients,
  Steps,
} from "@/Presentation/components/organisms";
import { Colors } from "@/Library/StyleTypes";

interface Props {
  recipe: Recipe;
}

export const PosterViewCard: React.FC<Props> = ({ recipe }) => {
  const publishedAt = new Date(recipe.publishedAt);

  return (
    <>
      <div className="container">
        <div className="card">
          <RecipeMain
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            imageSrc={recipe.imageUrl}
            published={publishedAt.toLocaleDateString()}
            author={recipe.author.name}
            isPosterView
          >
            <Ingredients ingredients={recipe.ingredients} />
            <Steps steps={recipe.steps} />
          </RecipeMain>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }
          .card {
            width: 90%;
            margin: 0 auto;
            padding: 12px;
            box-shadow: 0 3px 6px -2px rgb(0 10 60 / 20%);
            background-color: ${Colors.white};
            border-radius: 20px;
          }
        `}
      </style>
    </>
  );
};
