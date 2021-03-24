import { Icon } from "@/Presentation/components/atoms";
import { Icons } from "@/Library/StyleTypes";

interface Props {
  icon: Icons;
}

export const IconWithText: React.FC<Props> = ({ icon, children }) => {
  return (
    <>
      <div className="container">
        <Icon icon={icon} size="md" />
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
            font-size: 8px;
            margin: 0;
          }
        `}
      </style>
    </>
  );
};
