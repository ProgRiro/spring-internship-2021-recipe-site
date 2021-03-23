import React from "react";
import { Colors, FontSizes } from "@/Library/StyleTypes";

interface Props {
  color: Colors;
  fontSize: FontSizes;
  isCenter?: boolean;
}

export const Title: React.FC<Props> = ({
  color,
  fontSize,
  isCenter = false,
  children,
}) => {
  return (
    <>
      <h1
        style={{
          color: Colors[color],
          fontSize: FontSizes[fontSize],
          textAlign: isCenter ? "center" : "initial",
          display: "flex",
          alignItems: "center",
        }}
      >
        {children}
      </h1>
    </>
  );
};
