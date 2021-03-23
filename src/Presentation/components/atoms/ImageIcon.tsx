export const config = { amp: "hybrid" };

import React from "react";
import { useAmp } from "next/amp";

interface Props {
  imgSrc: string;
}

export const ImageIcon: React.FC<Props> = ({ imgSrc }) => {
  const isAmp = useAmp();
  return (
    <div>
      {isAmp ? (
        <amp-img className="img" src={imgSrc} height={35} width={35} />
      ) : (
        <img className="img" src={imgSrc} height={35} width={35} />
      )}

      <style jsx>
        {`
          .img {
            border-radius: 50%;
            margin: 5px;
          }
        `}
      </style>
    </div>
  );
};
