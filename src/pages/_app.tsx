import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
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
