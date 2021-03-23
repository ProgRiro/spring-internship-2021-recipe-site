import React from "react";
import { Title } from "@/Presentation/components/atoms";
import { SITE_NAME_EN } from "@/Library/Constants";
import { FontSizes } from "@/Library/StyleTypes";

interface Props {
  imgSrc: string;
}

export const HeroLogo: React.FC<Props> = () => {
  return (
    <>
      <Title fontSize="md" color="black">
        <span className="icon">👋</span> {SITE_NAME_EN}
      </Title>
      <style jsx>
        {`
          .icon {
            font-size: ${FontSizes.lg};
            margin-right: 8px;
          }
        `}
      </style>
    </>
  );
};
