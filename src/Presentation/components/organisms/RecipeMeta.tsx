import { IconButton, LinkButton } from "@/Presentation/components/molecules";
import { FontSizes } from "@/Library/StyleTypes";
import dynamic from "next/dynamic";
const StarButton = dynamic(
  () => import("@/Presentation/components/organisms/StarButton"),
  { ssr: false }
);

interface Props {
  id: number;
  published: string;
  author: string;
  isPosterView: boolean;
}

export const RecipeMeta: React.FC<Props> = ({
  id,
  published,
  author,
  isPosterView,
}) => {
  return (
    <>
      <div className="container">
        <StarButton id={id} />
        {isPosterView ? (
          <LinkButton to={`/recipes/${id}`}>
            <IconButton
              className="starButton"
              icon="file"
              color="green"
              bgColor="white"
              size="lg"
            />
          </LinkButton>
        ) : (
          <LinkButton to={`/recipes/${id}?view=poster`}>
            <IconButton
              className="starButton"
              icon="copy"
              color="green"
              bgColor="white"
              size="lg"
            />
          </LinkButton>
        )}

        <div>
          <small className="meta">{published}</small>
          <small className="meta">by {author}</small>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }
        .meta {
          display: block;
          font-size: ${FontSizes.md};
          text-align: right;
        }
      `}</style>
    </>
  );
};
