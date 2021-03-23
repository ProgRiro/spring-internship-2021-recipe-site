import React from "react";
import { HeroLogo } from "@/Presentation/components/molecules";
import { NavMenu } from "@/Presentation/components/organisms";
import { Colors } from "@/Library/StyleTypes";

export const Header: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="leftContainer">
          <HeroLogo imgSrc="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/waving-hand.png" />
        </div>
        <div className="rightContainer">
          <NavMenu />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 8px 0;
            background-color: ${Colors.beige};
          }
          .leftContainer {
            width: 50%;
          }
          .rightContainer {
            width: 30%;
          }
        `}
      </style>
    </>
  );
};
