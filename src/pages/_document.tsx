import Document, { Html, Head, Main, NextScript } from "next/document";
import {
  DESCRIPTION,
  CONTENT_KEYWORD,
  TOP_OG_IMAGE_URL,
} from "@/Library/Constants";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name="theme-color" content="#f2efe4" />
          <meta name="description" content={DESCRIPTION} />
          <meta property="og:image" content={TOP_OG_IMAGE_URL} />
          <meta content={CONTENT_KEYWORD} name="keywords" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&family=Noto+Sans:wght@400;700&display=swap"
            as="font"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
