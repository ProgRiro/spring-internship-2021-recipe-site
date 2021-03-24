import Image from "next/image";
import { TOP_OG_IMAGE_URL } from "@/Library/Constants";
import { Colors } from "@/Library/StyleTypes";

type Img = "RecipeImage" | "RecipeCardImage" | "ImgeIcon";

interface Props {
  className: Img;
  imageSrc: string | null;
}

export const Img: React.FCX<Props> = ({ className, imageSrc }) => {
  return (
    <>
      <div className={className}>
        <Image
          src={imageSrc ? imageSrc : TOP_OG_IMAGE_URL}
          width={160}
          height={90}
          quality={50}
          loading="lazy"
          layout="responsive"
        />
      </div>
      <style jsx>
        {`
          .RecipeImage {
            width: 99%;
            margin: 0 auto;
            border-radius: 20px;
            border: solid 1px ${Colors.black};
            overflow: hidden;
          }
          .RecipeCardImage {
            width: 90%;
            margin: 0 auto;
            border-radius: 20px;
            border: solid 1px ${Colors.black};
            overflow: hidden;
          }
          .ImgeIcon {
            border-radius: 50%;
            margin: 5px;
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
};
