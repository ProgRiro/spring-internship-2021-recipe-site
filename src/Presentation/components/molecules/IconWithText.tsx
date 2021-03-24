import { Icon } from "@/Presentation/components/atoms";
import { Icons, FontSizes } from "@/Library/StyleTypes";
interface Props {
  icon: Icons;
  iconSize: FontSizes;
  fontSize: FontSizes;
}

export const IconWithText: React.FC<Props> = ({
  icon,
  iconSize,
  fontSize,
  children,
}) => {
  return (
    <>
      <div className="container">
        <Icon icon={icon} size={iconSize} />
        <p className="text">{children}</p>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .text {
            font-size: ${FontSizes[fontSize]};
            margin: 0;
          }
        `}
      </style>
    </>
  );
};
