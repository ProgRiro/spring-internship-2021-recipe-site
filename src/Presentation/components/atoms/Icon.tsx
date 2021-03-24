import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons, FontSizes } from "@/Library/StyleTypes";

interface Props {
  icon: Icons;
  size: FontSizes;
}

export const Icon: React.FC<Props> = ({ icon, size, ...rest }) => {
  return (
    <>
      <FontAwesomeIcon
        icon={Icons[icon]}
        style={{ fontSize: FontSizes[size] }}
        {...rest}
      />
    </>
  );
};
