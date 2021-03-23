import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "@/Library/StyleTypes";

interface Props {
  icon: Icons;
}

export const Icon: React.FC<Props> = ({ icon, ...rest }) => {
  return (
    <>
      <FontAwesomeIcon icon={Icons[icon]} style={{ width: "16px" }} {...rest} />
    </>
  );
};
