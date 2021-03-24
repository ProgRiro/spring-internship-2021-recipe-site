import Link from "next/link";
import { Icon } from "@/Presentation/components/atoms";
import { Colors, FontSizes, Icons } from "@/Library/StyleTypes";

type className = "pagenationButton" | "searchButton" | "starButton";

interface Props {
  className: className;
  icon: Icons;
  color: Colors;
  bgColor: Colors;
  size: FontSizes;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const IconButton: React.FCX<Props> = ({
  className,
  icon,
  color,
  bgColor,
  size,
  isDisabled = false,
  onClick,
}) => {
  return (
    <>
      {isDisabled ? (
        <div className="disabled" />
      ) : (
        <button className={className} onClick={onClick}>
          <Icon icon={icon} size={size} />
        </button>
      )}
      <style jsx>
        {`
          .disabled {
            width: 50px;
            height: 50px;
            cursor: default;
          }
          .pagenationButton {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            color: ${Colors[color]};
            background-color: ${Colors[bgColor]};
            margin: 5px;
            border: none;
            box-shadow: 0 3px 6px -2px rgb(0 10 60 / 20%);
            cursor: pointer;
          }
          .searchButton {
            height: 100%;
            padding: 8px 12px 8px 8px;
            border-radius: 0 20px 20px 0;
            color: ${Colors[color]};
            background-color: ${Colors[bgColor]};
            border: none;
            cursor: pointer;
          }
          .starButton {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            color: ${Colors[color]};
            background-color: ${Colors[bgColor]};
            border: none;
            box-shadow: 0 3px 6px -2px rgb(0 10 60 / 20%);
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};
