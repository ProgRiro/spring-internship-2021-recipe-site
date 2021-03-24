import { Title, Img } from "@/Presentation/components/atoms";
import { RecipeMeta } from "@/Presentation/components/organisms";

interface Props {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  published: string;
  author: string;
}

export const RecipeMain: React.FC<Props> = ({
  id,
  title,
  description,
  imageSrc,
  published,
  author,
  children,
}) => {
  return (
    <>
      <main>
        <Title color="black" fontSize="xl" isCenter>
          {title}
        </Title>
        <Img className="RecipeImage" imageSrc={imageSrc} />
        <RecipeMeta id={id} published={published} author={author} />
        <p>{description}</p>
        <article className="article">{children}</article>
      </main>
      <style jsx>{`
        .article {
          margin: 20px 0;
        }
      `}</style>
    </>
  );
};
