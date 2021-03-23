import { SITE_NAME_EN, COPYRIGHT_YEAR } from "@/Library/Constants";
import { Colors } from "@/Library/StyleTypes";

export const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <small>
          © {COPYRIGHT_YEAR} {SITE_NAME_EN} All rights reserved.
        </small>
      </footer>
      <style jsx>
        {`
          footer {
            margin: 3em 0;
            position: relative;
            bottom: 0;
            padding: 1.5em 1.5em 0.5em 1.5em;
            border-top: solid 1px ${Colors.black};
            text-align: center;
          }
        `}
      </style>
    </>
  );
};
