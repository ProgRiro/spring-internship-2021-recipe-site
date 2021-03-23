import { DefaultLayout } from "@/Presentation/components/templates";
import { Title } from "@/Presentation/components/atoms";
import { Header, Footer } from "@/Presentation/components/organisms";
import { Colors, FontSizes } from "@/Library/StyleTypes";

interface Props {
  title: string;
  author: string;
  publishedAt: string;
  imageSrc: string | null;
}

export const RecipePage: React.FC<Props> = ({
  title,
  author,
  publishedAt,
  imageSrc,
  children,
}) => {
  const published = new Date(publishedAt);
  return (
    <>
      <DefaultLayout>
        <Header />
        <Title color="black" fontSize="xl">
          {title}
        </Title>
        <img className="img" src={imageSrc as string} />
        <small className="publishedAt">{published.toLocaleDateString()}</small>
        <small className="author">by {author}</small>
        <article className="article">{children}</article>
        <Footer />
      </DefaultLayout>
      <style jsx>{`
        .publishedAt {
          display: block;
          font-size: ${FontSizes.md};
          text-align: right;
          margin-top: 10px;
        }
        .author {
          display: block;
          font-size: ${FontSizes.md};
          text-align: right;
        }
        .img {
          display: block;
          width: 99%;
          margin: 0 auto;
          border-radius: 20px;
          border: solid 1px ${Colors.black};
        }
        .article {
          margin: 20px 0;
        }
      `}</style>
    </>
  );
};
