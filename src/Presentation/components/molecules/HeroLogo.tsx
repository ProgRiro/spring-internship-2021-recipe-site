import React from "react";
import { Title } from "@/Presentation/components/atoms";
import { LinkButton } from "@/Presentation/components/molecules";
import { SITE_NAME_EN } from "@/Library/Constants";
import { FontSizes } from "@/Library/StyleTypes";

interface Props {
  imgSrc: string;
}

export const HeroLogo: React.FC<Props> = () => {
  return (
    <>
      <LinkButton to="/">
        <Title fontSize="md" color="black">
          <span className="icon">👋</span> {SITE_NAME_EN}
        </Title>
      </LinkButton>
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
