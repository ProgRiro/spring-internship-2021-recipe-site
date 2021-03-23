import Head from "next/head";
import { DefaultLayout } from "@/Presentation/components/templates";
import { Title } from "@/Presentation/components/atoms";
import { Header, Footer } from "@/Presentation/components/organisms";
import { Colors, FontSizes } from "@/Library/StyleTypes";
import { SITE_NAME_JP, TOP_OG_IMAGE_URL, ORIGIN } from "@/Library/Constants";

interface Props {
  id: number;
  title: string;
  author: string;
  description: string;
  publishedAt: string;
  imageSrc: string | null;
}

export const RecipePage: React.FC<Props> = ({
  id,
  title,
  author,
  description,
  publishedAt,
  imageSrc,
  children,
}) => {
  const published = new Date(publishedAt);
  return (
    <>
      <DefaultLayout>
        <Head>
          <meta property="og:title" content={`${title} | ${SITE_NAME_JP}`} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`${ORIGIN}/recipes/${id}`} />
          <meta property="og:image" content={imageSrc || TOP_OG_IMAGE_URL} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Header />
        <Title color="black" fontSize="xl">
          {title}
        </Title>
        <img className="img" src={imageSrc as string} />
        <small className="publishedAt">{published.toLocaleDateString()}</small>
        <small className="author">by {author}</small>
        <p>{description}</p>
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
