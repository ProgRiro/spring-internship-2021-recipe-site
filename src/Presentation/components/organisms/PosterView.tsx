import { Swiper, SwiperSlide } from "swiper/react";
import Head from "next/head";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Lazy,
  EffectCube,
} from "swiper";
import { Recipe } from "@/Domain/Entity";
import {
  RecipeCard,
  PosterViewCard,
  PromptSwipe,
} from "@/Presentation/components/organisms";
import { SITE_NAME_JP, TOP_OG_IMAGE_URL, ORIGIN } from "@/Library/Constants";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Lazy, EffectCube]);

interface Props {
  recipes: Recipe[];
  isCube?: boolean;
}

export const PosterView: React.FC<Props> = ({ recipes, isCube = false }) => {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content={`${recipes[0].title} | ${SITE_NAME_JP}`}
        />
        <meta property="og:description" content={recipes[0].description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${ORIGIN}/recipes/${recipes[0].id}`}
        />
        <meta
          property="og:image"
          content={recipes[0].imageUrl || TOP_OG_IMAGE_URL}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <PromptSwipe />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        effect={isCube ? "cube" : "slide"}
        lazy
      >
        {recipes.map((recipe, index) => (
          <SwiperSlide key={index}>
            {isCube ? (
              <RecipeCard recipe={recipe} />
            ) : (
              <PosterViewCard recipe={recipe} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
