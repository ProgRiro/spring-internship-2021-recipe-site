import type { AppProps } from "next/app";
import Head from "next/head";
import { SITE_NAME_EN, SITE_NAME_JP } from "@/Library/Constants";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-cube/effect-cube.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>
          {SITE_NAME_EN} | レシピ検索No.1／料理レシピ載せるなら {SITE_NAME_JP}
        </title>
      </Head>
      <Component {...pageProps} />
      <style jsx global>
        {`
          html,
          body {
            font-family: "M PLUS Rounded 1c", "Noto Sans", sans-serif;
            background-color: #f2efe4;
          }
        `}
      </style>
    </>
  );
};

export default MyApp;
