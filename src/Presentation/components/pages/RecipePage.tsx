import Head from "next/head";
import { DefaultLayout } from "@/Presentation/components/templates";
import {
  Header,
  Footer,
  RecipeMain,
} from "@/Presentation/components/organisms";
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
        <RecipeMain
          id={id}
          title={title}
          description={description}
          imageSrc={imageSrc}
          published={published.toLocaleDateString()}
          author={author}
        >
          {children}
        </RecipeMain>
        <Footer />
      </DefaultLayout>
    </>
  );
};
