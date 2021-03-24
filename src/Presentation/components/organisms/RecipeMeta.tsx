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
}

export const RecipeMeta: React.FC<Props> = ({ id, published, author }) => {
  return (
    <>
      <div className="container">
        <StarButton id={id} />
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
