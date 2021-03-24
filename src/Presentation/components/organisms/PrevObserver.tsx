import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IconWithText } from "@/Presentation/components/molecules";

interface Props {
  link: string;
}

const PrevObserver: React.FC<Props> = ({ link }) => {
  const observer = useRef<IntersectionObserver>();
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();

  const getParams = () => {
    const url = new URL(link);
    const params = new URLSearchParams(url.search);
    const page = params.get("page");
    return page || "1";
  };

  const handler = () => {
    if (window.pageYOffset > 250) setIsShow(true);
    if (window.pageYOffset < 80) setIsShow(false);
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
          <div
            ref={elementRef}
            style={{
              height: 1,
              marginBottom: 160,
            }}
          />
          <IconWithText icon="angleUp" iconSize="xl" fontSize="md">
            前ページへ
          </IconWithText>
        </div>
      )}
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            margin-bottom: 30px;
          }
        `}
      </style>
    </>
  );
};

export default PrevObserver;
