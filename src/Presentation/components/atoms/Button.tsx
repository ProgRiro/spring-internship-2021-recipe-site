import { Colors, FontSizes } from "@/Library";

type buttonType = "submit" | "button";

interface Props {
  color: Colors;
  bgColor: Colors;
  fontSize: FontSizes;
  type: buttonType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = ({
  color,
  bgColor,
  fontSize,
  type,
  onClick,
  children,
}) => {
  return (
    <>
      <button type={type} onClick={onClick}>
        {children}
      </button>
      <style jsx>
        {`
          button {
            display: block;
            width: 60%;
            color: ${Colors[color]};
            background-color: ${Colors[bgColor]};
            font-size: ${FontSizes[fontSize]};
            padding: 8px 20px;
            border-radius: 20px;
            border: none;
            cursor: pointer;
            margin: 10px auto;
          }
        `}
      </style>
    </>
  );
};
