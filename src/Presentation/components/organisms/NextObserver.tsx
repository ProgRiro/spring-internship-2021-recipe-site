import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IconWithText } from "@/Presentation/components/molecules";

interface Props {
  link: string;
}

const NextObserver: React.FC<Props> = ({ link }) => {
  const observer = useRef<IntersectionObserver>();
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();

  const getParams = () => {
    const url = new URL(link);
    const params = new URLSearchParams(url.search);
    const page = params.get("page");
    return page;
  };

  const handler = () => {
    if (window.pageYOffset > 500) setIsShow(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  useEffect(() => {
    if (!elementRef.current) return;
    observer.current = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting && isShow) {
        const page = getParams();
        if (!page) return;
        const { query } = router;
        query.page = page;
        router.push({ query });
      }
    });
    observer.current.observe(elementRef.current);
    return () => observer.current?.disconnect();
  }, [link, isShow]);

  return (
    <>
      {isShow && (
        <div className="container">
          <IconWithText icon="angleDown" iconSize="xl" fontSize="md">
            次ページへ
          </IconWithText>
          <div
            ref={elementRef}
            style={{
              height: 1,
              marginTop: 200,
            }}
          />
        </div>
      )}
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            margin-top: 30px;
          }
        `}
      </style>
    </>
  );
};

export default NextObserver;
